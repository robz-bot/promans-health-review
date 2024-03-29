export class baseUrl {
  public static BASE_URL: string = "http://localhost:8080/api/v1/";
  // public static BASE_URL: string = "https://healthreview.herokuapp.com/api/v1/";
}

export class apiKey {
  public static API_KEY: string = "h1r5pr0";
}

export class patterns {
  public static ONLY_ALPHNUMERIC_PATTERN = new RegExp("^[a-zA-Z0-9]*$");
  public static EMPCODE_PATTERN = new RegExp("^[a-zA-Z0-9]+[-][a-zA-Z0-9]+$");
}

export class DateUtils {
  private static date = new Date();
  public static CURRENT_MONTH = DateUtils.date.toLocaleString("en-us", {
    month: "long",
  });
  public static CURRENT_YEAR = DateUtils.date.getFullYear();
}

export class colorUtils {
  public static COLOR_POOR = "#F50057";
  public static COLOR_AVERAGE = "#F9A826";
  public static COLOR_GOOD = "#6C63FF";
  public static COLOR_EXCELLENT = "#00BFA6";
}
