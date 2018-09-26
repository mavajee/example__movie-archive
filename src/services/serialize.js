/**
 * @param {Array} data 
 * @returns {Object}
 */
export default function(data) {
  return data.reduce((serializedData, value) => {
    serializedData.byId[value.id] = value
    serializedData.ids.push(value.id)

    return serializedData
  }, {
    byId: {},
    ids: [],
  })
}
