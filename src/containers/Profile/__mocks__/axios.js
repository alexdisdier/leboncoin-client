module.exports = {
  get: jest.fn(() => {
    return Promise.resolve({
      data: {
        offers: [
          {
            count: 1,
            offers: [
              {
                description:
                  "I'll connect the mobile AI system, that should monitor the USB system!",
                price: 675,
                pictures: [],
                _id: "5c7ace2c3fe94a001750770b",
                title: "Handcrafted Soft Mouse",
                creator: {
                  account: { phone: "0600000000", username: "faker" },
                  _id: "5c7a850dd4bf7a00174c015e"
                },
                created: "2019-03-02T18:40:44.613Z",
                __v: 0
              },
              {
                description: "another product offer!",
                price: 100,
                pictures: [],
                _id: "5c7ace2c3fe94a001750770b",
                title: "Handcrafted Soft Mouse",
                creator: {
                  account: { phone: "0600000000", username: "faker" },
                  _id: "5c7a850dd4bf7a00174c015e"
                },
                created: "2019-03-02T18:40:44.613Z",
                __v: 0
              }
            ]
          }
        ]
      }
    });
  })
};
