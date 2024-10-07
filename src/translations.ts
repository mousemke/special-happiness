/**
 * this represents a simplified i18n system to be replaced. This JS object
 * would likely be instead either a full object retrieved from a translation
 * service or each individual translatiobn retieved by modifying the SDK
 * translation retrieval function
 */
const translations = {
  en: {
    LOADING_TEXT: "Now loading...",
    SET_LANGUAGE: "Toggle Language",
    DATA_LOADED: "Data from {{from}} to {{to}}",
    FORECAST: "Forecast: ",
    ACTUAL: "Actual: "
  },

  jp: {
    LOADING_TEXT: "ロード中...",
    SET_LANGUAGE: "トグル言語",
    DATA_LOADED: "{{from}}から{{to}}までのデータ。",
    FORECAST: "予想: ",
    ACTUAL: "実際: "
  }
};

export default translations;
