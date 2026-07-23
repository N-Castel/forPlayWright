class RestFulPage {
    /**
     * @param {import('plawright/test').APIRequestContext} apiContext
     */

    constructor(apiContext){
        this.apiContext = apiContext;
    }

      async createBooking(data) {
        return this.apiContext.post('/booking', { data });
    }

    async getBooking(id) {
        return this.apiContext.get(`/booking/${id}`);
    }

    async getAllBookingIds() {
        return this.apiContext.get('/booking');
    }

    async updateBooking(id, data, token) {
        return this.apiContext.put(`/booking/${id}`, {
            data,
            headers: {
                Cookie: `token=${token}`,
            },
        });
    }

    async deleteBooking(id, token) {
        return this.apiContext.delete(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`,
            },
        });
    }
}

module.exports = { RestFulPage }
