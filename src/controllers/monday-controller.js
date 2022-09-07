const mondayService = require('../services/monday-service');
const carbon_footprint = require('carbon-footprint')

async function calcCarbonFootprint(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;


  try {
    const { inputFields } = payload;
    const { boardId, itemId, sourceColumnId, locationType, consumptionType, targetColumnId} = inputFields;
    let consumption = await mondayService.getColumnValue(shortLivedToken, itemId, sourceColumnId);
    if (!consumption) {
      return res.status(200).send({});
    }
    let curr_usage = await mondayService.getColumnValue(shortLivedToken, itemId, targetColumnId);
    if (!curr_usage) {
      curr_usage = 0
    } else {
      curr_usage = parseInt(curr_usage.replace(/['"]+/g, ''));
    }
    consumption = parseInt(consumption.replace(/['"]+/g, ''));
    const category = carbon_footprint[req.params.category]
    let out_carbon_footprint
    console.log(req.params.category)
    if (req.params.category === "streaming") {
      out_carbon_footprint = carbon_footprint.getInternetUsageCarbonImpact(consumption, category[consumptionType.value], locationType.value)
    } else {
      out_carbon_footprint = category[consumptionType.value] * consumption
    }
    console.log(out_carbon_footprint)
    out_carbon_footprint += curr_usage
    await mondayService.changeColumnValue(shortLivedToken, boardId, itemId, targetColumnId, out_carbon_footprint.toString());

    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

async function getTypeOptions(req, res) {
  try {
    const values = []
    for (let key in carbon_footprint[req.params.category]) {
      values.push({value: key, title: key})
    }
    return res.status(200).send(values);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

module.exports = {
  getTypeOptions,
  calcCarbonFootprint
};
