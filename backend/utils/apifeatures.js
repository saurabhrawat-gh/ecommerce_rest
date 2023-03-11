class ApiFeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    async search() {
        let products;
        const isQueryAvailable = this.queryString;
      
        if (isQueryAvailable) {
          products = await this.query.find({
            name: {
              $regex: this.queryString,
              $options: "i",
            },
          });
        } else {
          products = await this.query.find();
        }

        return products
    }
}

module.exports = ApiFeatures