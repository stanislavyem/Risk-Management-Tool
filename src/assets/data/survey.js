export const json = {
  "title": "Send Feedback to the Team",
  // "description": "Need Help? Visit our support page",
  "completedHtml": "<h3>Thank you for your feedback</h3>",
  "pages": [{
    "elements": [
      {
        name: "email",
        title: "Enter your email:",
        type: "text"
      }, {
        name: "firstName",
        title: "Enter your first name:",
        type: "text"
      },
      {
        "type": "matrix",
        "name": "qualities",
        "title": "Please indicate if you agree or disagree with the following statements",
        "columns": [{
          "value": 5,
          "text": "Strongly agree"
        }, {
          "value": 4,
          "text": "Agree"
        }, {
          "value": 3,
          "text": "Neutral"
        }, {
          "value": 2,
          "text": "Disagree"
        }, {
          "value": 1,
          "text": "Strongly disagree"
        }],
        "rows": [{
        //   "value": "affordable",
        //   "text": "Product is affordable"
        // }, {
          "value": "does-what-it-claims",
          "text": "Product does what it claims"
        }, {
          "value": "better-than-others",
          "text": "Product is better than other products on the market"
        }, {
          "value": "easy-to-use",
          "text": "Product is easy to use"
        }]
      }, {
        "type": "rating",
        "name": "satisfaction-score",
        "title": "How satisfied are you with our product?",
        "mininumRateDescription": "Not satisfied",
        "maximumRateDescription": "Completely satisfied"
      }, {
        "type": "rating",
        "name": "recommend",
        "visibleIf": "{satisfaction-score} > 3",
        "title": "How likely are you to recommend our product to a friend or co-worker?",
        "mininumRateDescription": "Will not recommend",
        "maximumRateDescription": "I will recommend"
      }, {
        "type": "comment",
        "name": "suggestions",
        "title": "What would make you more satisfied with our product?"
      }]
  }, {
    "elements": [{
    //   "type": "radiogroup",
    //   "name": "price-comparison",
    //   "title": "Compared to our competitors, do you feel our product is:",
    //   "choices": [
    //     "Less expensive",
    //     "Priced about the same",
    //     "More expensive",
    //     "Not sure"
    //   ]
    // }, {
    //   "type": "radiogroup",
    //   "name": "current-price",
    //   "title": "Do you feel our current price is merited by our product?",
    //   "choices": [
    //     "correct|Yes, the price is about right",
    //     "low|No, the price is too low for your product",
    //     "high|No, the price is too high for your product"
    //   ]
    // }, {
      "type": "rating",
      "name": "profile-score",
      "title": "How valuable is the app's risk profile scoring in helping you quickly understand a client's risk quality and prioritize next steps?",
      "mininumRateDescription": "Not at all valuable",
      "maximumRateDescription": "Extremely valuable"
    }, {
      "type": "rating",
      "name": "action-item-score",
      "title": "Does the app make it easier to identify, assign, and track risk improvement action items through completion?",
      "mininumRateDescription": "Strongly disagree",
      "maximumRateDescription": "Strongly agree"
    }, {
      "type": "rating",
      "name": "communicate-score",
      "title": "Would the scoring and action-item tracking features help you communicate risk status, progress, and accountability to clients, producers, or underwriters?",
      "mininumRateDescription": "Definitely not",
      "maximumRateDescription": "Definitely yes"
    }, {
      "type": "comment",
      "name": "suggestions",
      "title": "Please explain your answer and describe any situations where these features would be particularly useful or not useful."
    }]
  }, {
    "elements": [{
      "type": "multipletext",
      "name": "price-limits",
      "title": "What is the highest and lowest price you would pay for a product like ours?",
      "items": [{
        "name": "highest",
        "title": "Highest"
      }, {
        "name": "lowest",
        "title": "Lowest"
      }]
    }]
  }],
  "completeText": "Send",
  "widthMode": "responsive",
  "showQuestionNumbers": false
};