async function get(req, res, next) {
  try {
    const reponse = [
        {
            id: 1,
            name: 'name 1'
        },
        {
            id: 2,
            name: 'name 2'
        },
        {
            id: 3,
            name: 'name 3'
        }
    ]
    res.json(reponse);
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

module.exports = {
  get
};
