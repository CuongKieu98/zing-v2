export default class stringUtils {
  static formatDuration(value) {
    var m = Math.floor(value / 60);
    var s = Math.floor(value % 60);
    if (isNaN(m) || isNaN(s)) {
      m = 0;
      s = 0;
    }
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  static parseFile = (filePath) => {
    let dataLyric = []
    if (filePath && filePath !== null) {
      fetch(filePath)
        .then((res) => res.text())
        .then((data) => {
          dataLyric = data.split("\n").map((text, index) => [
            {
              time: text.replace(/(^.*\[|\].*$)/g, ""),
              lyric: text.replace(/ *\[[^\]]*]/, "").trim(),
            },
          ]); 
          console.log(dataLyric);
          
        });
        return dataLyric;
    } else{
      return "";
    }

  };
}
