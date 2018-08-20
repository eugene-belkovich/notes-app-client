export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "jeka-notes-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://dl19yspqoe.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_mGe6MmPWG",
    APP_CLIENT_ID: "1rk9iv634q2nce47o8fe664kor",
    IDENTITY_POOL_ID: "us-west-2:3f5c5680-3498-424d-b968-6688aa74103e"
  }
  MAX_ATTACHMENT_SIZE: 5000000,
};