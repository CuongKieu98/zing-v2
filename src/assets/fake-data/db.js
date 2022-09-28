import images from "../images";
import radios from "../radios";
import themes from "../theme";
import info from "./info";
import audios from "./audio";

const SECTION_1 = [
  {
    img: images.test1,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test2,
    title: "K-pop: Hits Quốc Dân",
    astist: "SNSD,BLACKPINK,BTS...",
  },
  {
    img: images.test3,
    title: "K-HIP-HOP Beasts",
    astist: "K-HIP-HOP Beasts",
  },
  {
    img: images.test4,
    title: "K-POP Debut Song",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test5,
    title: "K-pop Dance",
    astist: "aespa,NCT Dream,NewJeans...",
  },
];

const SECTION_2 = [
  {
    img: images.newperday1,
    title: "V-Pop Tháng 9/2022",
    astist: "Muôn màu V-Pop tháng 9",
  },
  {
    img: images.newperday2,
    title: "US-UK Tháng 9/2022",
    astist: "Nhạc US-UK tháng 9 này có gì mới?",
  },
  {
    img: images.newperday3,
    title: "K-pop Deabak",
    astist: "K-Pop mới tinh của tháng 9",
  },
  {
    img: images.newperday4,
    title: "C-Pop Tháng 9/2022",
    astist: "C-Pop nổi bật của tháng 9 gọi tên",
  },
  {
    img: images.newperday5,
    title: "Indie Việt Tháng 9/2022",
    astist: "Lựa chọn tiềm năng của Indie Việt trong tháng 9",
  },
];
const SECTION_3 = [
  {
    img: images.xone1,
    title: "Best Track In Town",
    astist: "Âm nhạc tuyệt vời của 2021",
  },
  {
    img: images.xone2,
    title: "EDM Everyday",
    astist: "Mỗi ngày hứng khởi cùng EDM",
  },
  {
    img: images.xone3,
    title: "Power Beat",
    astist: "Năng lượng tràn đầy từ âm nhạc",
  },
  {
    img: images.xone4,
    title: "All New All Now",
    astist: "Tất cả nhạc mới đều ở XONE",
  },
  {
    img: images.xone5,
    title: "Jazz Time",
    astist: "Nhạc Jazz đến rồi đây!",
  },
];

const SECTION_4 = [
  {
    img: images.top1,
    title: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
    astist:
      "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  },
  {
    img: images.top2,
    title: "Top 100 Pop Âu Mỹ Hay Nhất",
    astist:
      "Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  },
  {
    img: images.top3,
    title: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
    astist:
      "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  },
  {
    img: images.top4,
    title: "Top 100 Nhạc Trữ Tình Hay Nhất",
    astist:
      "Top 100 Nhạc Trữ Tình là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trữ Tình, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  },
  {
    img: images.top5,
    title: "Top 100 Nhạc Hàn Quốc Hay Nhất",
    astist:
      "Top 100 Nhạc Hàn Quốc Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Hàn Quốc, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
  },
];
const SECTION_5 = [
  {
    img: images.test1,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test2,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test3,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test4,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
  {
    img: images.test5,
    title: "K-pop Deabak",
    astist: "aespa,NCT Dream,NewJeans...",
  },
];

const RADIO_1 = [
  {
    img: radios.seradio5,
    title: "Đắp Chăn Nằm Nghe Tun Kể",
  },
  {
    img: radios.seradio,
    title: "XONE with Stars",
  },
  {
    img: radios.seradio2,
    title: "How2Money x Doctor Housing",
  },
  {
    img: radios.seradio3,
    title: "HIEU.TV",
  },
  {
    img: radios.seradio4,
    title: "Tri Kỷ Cảm Xúc",
  },
];

const THEME_DYNAMIC = [
  {
    id: "london",
    background: themes.lodonBg,
    img: themes.lodon,
    title: "London",
    class: "theme-dynamic-london",
    datatheme: "light",
  },
  {
    id: "light",
    background: "",
    img: themes.lightdart,
    title: "Sáng Tối",
    class: "theme-dynamic-light",
    datatheme: "light",
  },
  {
    id: "blue",
    background: "",
    img: themes.blue,
    title: "Xanh Da Trời",
    class: "theme-dynamic-blue",
    datatheme: "blue-light",
  },
  {
    id: "pink",
    background: "",
    img: themes.pink,
    title: "Hồng",
    class: "theme-dynamic-pink",
    datatheme: "pink-light",
  },
  {
    id: "brown",
    background: "",
    img: themes.brown,
    title: "Nâu",
    class: "theme-dynamic-brown",
    datatheme: "gray",
  },
];
const THEME_2 = [
  {
    id: "xone",
    background: themes.xoneBg,
    img: themes.xone,
    title: "XONE",
    class: "theme-dynamic-xone",
    datatheme: "dark",
  },
  {
    id: "zma",
    background: themes.zmabg,
    img: themes.zma,
    title: "Zing Music Awards",
    class: "theme-dynamic-zma",
    datatheme: "blue",
  },
  {
    id: "eiffel",
    background: themes.eiffelBg,
    img: themes.eiffel,
    title: "Tháp Eiffel",
    class: "theme-dynamic-eiffel",
    datatheme: "dark",
  },
];
const THEME_ARTIST = [
  {
    id: "jack",
    background: themes.jackBg,
    img: themes.jack,
    title: "Jack",
    class: "theme-dynamic-jack",
    datatheme: "brown",
  },
  {
    id: "iu",
    background: themes.iuBg,
    img: themes.iu,
    title: "IU",
    class: "theme-dynamic-iu",
    datatheme: "gray",
  },
  {
    id: "jichangwook",
    background: themes.jichangwookBg,
    img: themes.jichangwook,
    title: "Ji Chang Wook",
    class: "theme-dynamic-jichangwook",
    datatheme: "green-light",
  },
  {
    id: "lisa",
    background: themes.lisaBg,
    img: themes.lisa,
    title: "Lisa",
    class: "theme-dynamic-lisa",
    datatheme: "pink-light",
  },
  {
    id: "jennie",
    background: themes.jennieBg,
    img: themes.jennie,
    title: "Jennie Kim",
    class: "theme-dynamic-jennie",
    datatheme: "gray",
  },
  {
    id: "jisoo",
    background: themes.jisooBg,
    img: themes.jisoo,
    title: "Jisoo",
    class: "theme-dynamic-jisoo",
    datatheme: "light",
  },
  {
    id: "rose",
    background: themes.roseBg,
    img: themes.rose,
    title: "Rosé",
    class: "theme-dynamic-rose",
    datatheme: "blue",
  },
];

const MY_PLAYLIST = [
  {
    encodeId: "1",
    title: "Mình Hãy Ngừng Lại Em Nhé",
    thumbnailM: info.emnendunglai,
    thumbnail: info.emnendunglai,
    artistsNames: "Văn Võ,Ngọc Nhân",
    album: {
      encodeId: "6BZUUWW0",
      title: "Mình Ngừng Lại Em Nhé (Single)",
    },
    srcAudio: audios.minhngunglaiemnhe,
    currentTime: 0,
    duration: 339,
    lyric: info.minhngunglaiemnhelrc,
  },
  {
    encodeId: "2",
    title: "Em Nên Dừng Lại",
    thumbnailM: info.imgemhayquendi,
    thumbnail: info.imgemhayquendi,
    artistsNames: "Khang Việt",
    album: {
      encodeId: "2",
      title: "Em Nên Dừng Lại (Single)",
    },
    srcAudio: audios.emnendunglai,
    currentTime: 0,
    duration: 339,
    lyric: info.emnendunglailrc,
  },
  {
    encodeId: "3",
    title: "Có Chơi Có Chịu",
    thumbnailM: info.cochoicochiuimg,
    thumbnail: info.cochoicochiuimg,
    artistsNames: "Karik, Only C",
    album: {
      encodeId: "2",
      title: "Có Chơi Có Chịu (Single)",
    },
    srcAudio: audios.cochoicochiu,
    currentTime: 0,
    duration: 339,
    lyric: info.cochoicochiu,
  },
  {
    encodeId: "4",
    title: "Tòng Phu",
    thumbnailM: info.imgtongphu,
    thumbnail: info.imgtongphu,
    artistsNames: "Keyo",
    album: {
      encodeId: "2",
      title: "Tòng Phu (Single)",
    },
    srcAudio: audios.tongphu,
    currentTime: 0,
    duration: 339,
    lyric: info.tongphu,
  },
  {
    encodeId: "5",
    title: "Dang Dở",
    thumbnailM: info.dangdoimg,
    thumbnail: info.dangdoimg,
    artistsNames: "Keyo",
    album: {
      encodeId: "2",
      title: "Dang Dở (Single)",
    },
    srcAudio: audios.dangdo,
    currentTime: 0,
    duration: 339,
    lyric: info.dangdo,
  },
  {
    encodeId: "6",
    title: "Thế Giới Trong Em",
    thumbnailM: info.imgthegioitrongem,
    thumbnail: info.imgthegioitrongem,
    artistsNames: "Hương Ly, LY.M",
    album: {
      encodeId: "2",
      title: "Thế Giới Trong Em (Single)",
    },
    srcAudio: audios.thegoitronganh,
    currentTime: 0,
    duration: 339,
    lyric: info.thegioitronganh,
  },
  {
    encodeId: "7",
    title: "Waiting For You",
    thumbnailM: info.w4u,
    thumbnail: info.w4u,
    artistsNames: "MONO, Onionn",
    album: {
      encodeId: "2",
      title: "22",
    },
    srcAudio: audios.waiting4u,
    currentTime: 0,
    duration: 339,
    lyric: info.waitting4u,
  },
  {
    encodeId: "8",
    title: "Xin Má Rước Dâu",
    thumbnailM: info.imgxinmaruocdau,
    thumbnail: info.imgxinmaruocdau,
    artistsNames: "Diệu Kiên",
    album: {
      encodeId: "2",
      title: "Xin Má Rước Dâu (Single)",
    },
    srcAudio: audios.xinmaruocdau,
    currentTime: 0,
    duration: 339,
    lyric: info.xinmaruocdau,
  },
];

export {
  SECTION_1,
  SECTION_2,
  SECTION_3,
  SECTION_4,
  RADIO_1,
  THEME_DYNAMIC,
  THEME_2,
  THEME_ARTIST,
  MY_PLAYLIST
};
