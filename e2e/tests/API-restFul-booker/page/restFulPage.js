class RestFulPage {
    /**
     * @param {import('plawright/test').APIRequestContext} restFullPage
     */

    constructor(restFullPage){
        this.page = restFullPage;
    }

      async createBooking(data) {
        return this.page.post('/booking', { data });
    }

    async getBooking(id) {
        return this.page.get(`/booking/${id}`);
    }

    async getAllBookingIds() {
        return this.page.get('/booking');
    }

    async updateBooking(id, data, token) {
        return this.page.put(`/booking/${id}`, {
            data,
            headers: {
                Cookie: `token=${token}`,
            },
        });
    }

    async deleteBooking(id, token) {
        return this.page.delete(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`,
            },
        });
    }
}

module.exports = { RestFulPage }
