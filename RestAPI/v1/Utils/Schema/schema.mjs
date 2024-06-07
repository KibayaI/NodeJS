export const valid_schema = {
  imageUrl: {
    notEmpty: {
      errorMessage: "imageUrl should not be empty",
    },
    isLength: {
        options : {max: 10},
        errorMessage: "Url should not be that long nigga"
    }
  },
  title: {
    notEmpty: {
      errorMessage: "title should not be empty",
    },
  },
  price: {
    notEmpty: {
      errorMessage: "imageUrl should not be empty",
    }
  },
  date: {
    notEmpty: {
      errorMessage: "date should not be empty",
    },
    isTime: {
        errorMessage: "Date should be a date"
    }
  },
  location: {
    notEmpty: {
      errorMessage: "location should not be empty",
    },
  },
  company: {
    notEmpty: {
      errorMessage: "company should not be empty",
    },
  },
};
