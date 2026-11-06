/* ===== NỘI DUNG: DATA[số chapter], đếm từ 0 (0 = chapter 01 ... 9 = chapter 10) ===== */
const NAMES = { mc: "MC", ml: "Sylus" };
const DATA = {
  0: {
    title: "Khối Cầu Thủy Tinh",
    lines: [
      ["ml", "Chú ý đến những dao động năng lượng xung quanh những quả cầu này. Đừng đến gần quá"],
      ["mc", "Muộn rồi... Em vừa bị một loạt những ảo ảnh kỳ lạ tấn công"],
      ["ml", "Tsk, tsk... Hiệp Hội Thợ Săn của em đúng là ám ảnh với mấy dao động Metaflux nhỉ."],
      ["ml", "Chỉ cần mang chúng về là có thể coi như xong việc phải không?"],
      ["mc", "Lòng tự tôn của một Thợ săn không cho phép em kết thúc cuộc điều tra này một cách qua loa như thế đâu."],
      ["mc", "Dù gì thì chúng ta cũng đã đến tận đây rồi. Chi bằng cứ lần theo những manh mối bên trong mấy quả cầu này để tìm ra chủ nhân của chúng đi."],
      ["ml", "Hóa ra đây là lý do mà em cứ tăng ca mãi không nghỉ đấy à, mèo nhỏ. Được rồi, anh sẽ đi cùng em."],
      ["ml", "Nhìn gì chứ? Đây đâu phải lần đầu anh làm việc như thế này."],
      ["ml", "Vậy em định bắt đầu cuộc điều tra từ đâu đây?"],
    ],
  },
  1: {
    title: "Một Thành Phố Khác",
    lines: [
      ["ml", "Dù được chế tạo từ những vật liệu tiên tiến, vũ khí của họ cũng chẳng có gì đặc biệt. Chán thật đấy."],
      ["mc", "Có khi nào thế giới này ổn định đến mức chẳng cần đến vũ khí tối tân không?"],
      ["ml", "Đèn đuốc thành phố sáng trưng, vậy mà ngay góc phố đã là những khu ổ chuột. Nước bẩn ở khắp nơi, người dân thì sống chen chúc nhau."],
      ["ml", "Sự chênh lệch như thế chính là mảnh đất màu mỡ cho bạo lực sinh sôi."],
      ["mc", "Nghe có vẻ khá giống Khu N109 nhỉ."],
      ["ml", "Không cháy nổ, không đấu súng, đến một tay buôn vũ khí cũng chẳng thấy đâu."],
      ["ml", "Quan trọng hơn, nơi này còn thiếu một người nào đó suốt ngày thích ra lệnh cho anh."],
      ["ml", "Nếu Khu N109 cũng nhàm chán đến thế, Onychinus đã chuyển địa bàn từ lâu rồi."],
    ],
  },
  2: {
    title: "Nhân Bản",
    lines: [
      ["mc", "Không thể tin được... Đây là lần đầu tiên em nhìn thấy một 'con người' được chế tạo ra."],
      ["ml", "Bỏ qua chuyện công nghệ đi. Cái thực sự 'tiên tiến' chính là cái quan niệm đạo đức của chúng đấy."],
      ["mc", "Cách mọi người nhìn họ... cứ như thể họ là những tồn tại dị thường vậy."],
      ["ml", "Có khả năng tư duy, nhưng lại không được công nhận địa vị bình đẳng."],
      ["ml", "Nếu không xảy ra chuyện gì thì đúng là kỳ tích."],
      ["mc", "Đến cả anh cũng nói rằng sắp có chuyện, vậy hẳn chuyện đó phải nghiêm trọng lắm."],
      ["ml", "Với một thế giới mong manh đến thế này..."],
      ["ml", "Chỉ cần một cuộc nổi dậy của những kẻ Nhân bản thôi cũng đã quá đủ để khiến cả thế giới ấy sụp đổ."],
    ],
  },
  3: {
    title: "Bài Kiểm Tra Cơ Sở",
    lines: [
      ["mc", "Sylus, anh không vượt qua được Bài Kiểm Tra Cơ sở sao?"],
      ["ml", "Đó là bài kiểm tra mức độ ổn định cảm xúc được thiết kế dành cho Người Nhân Bản. Không vượt qua được mới là kết quả bình thường."],
      ["mc", "Nhưng kết quả của anh lại là 'không thể hoàn thành bài kiểm tra' mà."],
      ["ml", "Anh chẳng thể ép mình lặp đi lặp lại mấy lời vô nghĩa đó."],
      ["mc", "Cũng có lý. Bài kiểm tra này vốn đâu dành cho những người chẳng bao giờ chịu tuân theo quy tắc như anh."],
      ["mc", "Hay là để em thiết kế riêng một bài kiểm tra cho anh nhé?"],
      ["ml", "Nụ cười tinh quái đó... Em định dùng bài kiểm tra này để bắt anh nói điều gì sao?"],
      ["ml", "Lời đường mật, những câu tâng bốc, hay lời tỏ tình... Chẳng phải em đã nghe anh nói hết cả rồi sao?"],      
    ],
  },
  4: {
    title: "Sản Phẩm Đồng Hành",
    lines: [
      ["mc", "Quảng cáo về loại sản phẩm đồng hành này xuất hiện ở khắp mọi nơi. Chắc hẳn nó rất được ưa chuộng trong thế giới ấy."],
      ["ml", "Những sản phẩm được ưa chuộng đều là kết quả của việc khai thác ham muốn của con người."],
      ["mc", "Vậy thứ mà nó khai thác chính là khát khao được thấu hiểu sao?"],
      ["ml", "Em vẫn luôn thông minh như vậy. Con người lúc nào cũng mang trong mình một niềm tin mãnh liệt rằng họ có thể thấu hiểu lẫn nhau."],
      ["mc", "Còn em thì có một niềm tin vô cùng mãnh liệt rằng mình sẽ được anh thấu hiểu đấy, Sylus."],
      ["mc", "Anh có muốn thử đoán xem lúc này em mong được nghe điều gì nhất không?"],
      ["ml", "'Anh cũng mong muốn được em thấu hiểu.'"],
      ["ml", "Nhìn biểu cảm của em, xem ra anh đoán đúng rồi."],
    ],
  },
  5: {
    title: "Tái Hiện Khung Cảnh",
    lines: [
      ["mc", "Ô... Đây là bất ngờ mà anh chuẩn bị cho em sao?"],
      ["ml", "Em thích những khung cảnh bên trong các quả cầu thủy tinh đó, đúng không? Anh đã nhờ hai đứa sinh đôi sắp xếp một chút."],
      ["mc", "Sylus, hình ảnh của anh đang được chiếu thành ảnh ba chiều kìa. Giờ trông anh khổng lồ luôn!"],
      ["mc", "Đây chính là cảm giác khi có một con rồng sao?"],
      ["ml", "Một con rồng thực sự còn lớn hơn cả hình chiếu ba chiều đấy. Xòe tay ra nào."],
      ["mc", "...Anh đang chọc vào lòng bàn tay em đấy à?"],
      ["ml", "Con rồng đang chào em đấy."],
      ["ml", "Khi một con rồng cúi đầu như thế này, nghĩa là em có thể vuốt ve nó."],
      ["ml", "Từ giờ trở đi, nó thuộc về em."],
    ],
  },
  6: {
    title: "Chế Tạo Ký Ức",
    lines: [
      ["mc", "Em đã xem quá nhiều quả cầu ký ức rồi. Giờ đây, mọi thứ đều khiến em cảm thấy đáng ngờ..."],
      ["ml", "Liệu việc một thứ có thật hay không có thật sự quan trọng đến thế không?"],
      ["mc", "Em chỉ đang tự hỏi... Nếu ký ức có thể được thêu dệt, vậy làm sao em chứng minh được rằng em thực sự là 'em'?"],
      ["ml", "Cứ cho là có ai đó thực sự đã tạo ra những ký ức của em đi."],
      ["ml", "Biết được điều đó liệu có thay đổi được điều gì trong cuộc sống của em không?"],
      ["ml", "Em đang cảm ơn người thiết kế ký ức đó sao? Chẳng phải anh mới là người có gu tốt à?"],
      ["ml", "Những gì tồn tại giữa chúng ta đâu phải thứ mà vài ký ức được dựng nên có thể quyết định."],
      ["mc", "Anh nói đúng. Tình cảm em dành cho Sylus hẳn đã tồn tại từ rất lâu, trước cả khi những ký ức của em bắt đầu hình thành."],     
    ],
  },
   7: {
    title: "Em Là Duy Nhất",
    lines: [
      ["mc", "Anh nghĩ Mephisto đã bao giờ tự hỏi liệu mình có phải là một con chim máy hay không?"],
      ["ml", "Sao em lại hỏi vậy?"],
      ["mc", "Những Người Nhân Bản ở thế giới này đều muốn trở thành những cá thể độc nhất vô nhị, giống như con người."],
      ["mc", "Nhưng khi phát hiện ra bản thân chỉ là những tạo vật được chế tạo, họ lại suy sụp hoàn toàn."],
      ["ml", "Em nghĩ Mephisto là một con chim bình thường sao?"],
      ["mc", "Tất nhiên là không rồi! Nó là Mephisto cơ mà!"],
      ["ml", "Vậy thì nó chính là một cá thể độc nhất vô nhị. Sự 'đặc biệt' là ý nghĩa mà người này trao cho người kia."],
      ["ml", "Nếu có lúc nào đó em băn khoăn liệu bản thân có thực sự là một người độc nhất vô nhị hay không..."],
      ["ml", "Em cứ đến tìm anh. Và câu trả lời của anh sẽ luôn là có."],
    ],
  },
    8: {
    title: "Hiện Thực Không Thể Chạm Tới",
    lines: [
      ["mc", "Em có một tin tốt và một tin xấu. Anh muốn nghe tin nào trước?"],
      ["ml", "Nếu anh nói chẳng muốn nghe tin nào cả, em có chịu đổi chủ đề không?"],
      ["mc", "Vậy em sẽ bắt đầu bằng tin tốt trước nhé..."],
      ["mc", "Tin tốt là thành phố xuất hiện trong những quả cầu ký ức thực sự tồn tại."],
      ["mc", "Còn tin xấu là... Thành phố ấy không xuất hiện trên bất kỳ tấm bản đồ nào mà chúng ta biết. Có thể nó chỉ là một hình chiếu dị thường."],
      ["ml", "Một thành phố có thật nhưng lại không thể đặt chân đến sao? Thú vị đấy."],
      ["mc", "Nhưng tiếc là chúng ta sẽ chẳng bao giờ được tận mắt nhìn thấy nơi đó."],
      ["ml", "Kiên nhẫn chút nào. Quà tặng thì phải được mở từng món một chứ."],
      ["ml", "Sao chúng ta không tận hưởng thế giới này cho thỏa thích trước khi nghĩ đến thế giới tiếp theo nhỉ?"],
    ],
  },
  9: {
    title: "Chân Thực, Chỉ Vì Riêng Em",
    lines: [
      ["ml", "Em đang viết báo cáo cho Hiệp hội đấy à?"],
      ["mc", "Ừm. Nhưng em có cảm giác như mình đang làm bài tập về nhà, viết nhật ký du lịch ấy..."],
      ["mc", "Nếu hồi còn đi học mà em được trải nghiệm một chuyện kỳ thú đến thế này, chắc chắn em đã được điểm tuyệt đối rồi."],
      ["ml", "Vậy sao? Thế thì những quả cầu bé nhỏ này quả thật sự đáng giá đấy chứ."],
      ["ml", "Chúng lưu giữ quá khứ của một ai đó, để rồi đổi lại, trao cho chúng ta những ký ức mới."],
      ["mc", "Sylus, hay là chúng ta cũng bắt đầu viết nhật ký để lưu giữ những kỷ niệm của riêng mình nhé?"],
      ["mc", "Thỉnh thoảng giở ra xem lại chắc sẽ tuyệt lắm."],
      ["ml", "Được thôi. Và nếu tình cờ có ai đó giở cuốn nhật ký ấy ra, rồi tìm thấy chút cảm hứng từ những trang viết..."],
      ["ml", "Thì chính điều đó lại trở thành một ký ức mới."],
    ],
  },
};

const $ = s => document.querySelector(s);
const overlay = $("#overlay"), menu = $("#menu"), nums = $("#nums");
const titleEl = $("#title"), content = $("#content"), prev = $("#prev"), next = $("#next");
let chap = 0;

// tạo 10 nút số
for (let i = 0; i < 10; i++) {
  const b = document.createElement("button");
  b.className = "num";
  b.innerHTML = "<span>" + String(i + 1).padStart(2, "0") + "</span>";
  b.onclick = () => { chap = i; render(); };
  nums.appendChild(b);
}

function render() {
  const d = DATA[chap] || { title: "Chapter " + String(chap + 1).padStart(2, "0"), lines: [] };
  titleEl.textContent = d.title;
  content.innerHTML = d.lines.length
    ? d.lines.map(([w, t]) => `<div class="msg ${w}"><span class="who">${NAMES[w]}</span><p>${t}</p></div>`).join("")
    : '<p class="empty">Nội dung sẽ được cập nhật.</p>';
  content.scrollTop = 0;
  [...nums.children].forEach((b, i) => b.classList.toggle("active", i === chap));
}

// mũi tên: trái hiện khi số 01 bị khuất, phải ẩn khi tới số 10
function arrows() {
  prev.hidden = nums.scrollLeft < nums.children[0].offsetWidth * 0.5;
  next.hidden = nums.scrollLeft + nums.clientWidth >= nums.scrollWidth - 4;
}
nums.addEventListener("scroll", arrows, { passive: true });
prev.onclick = () => nums.scrollBy({ left: -nums.clientWidth * 0.8 });
next.onclick = () => nums.scrollBy({ left: nums.clientWidth * 0.8 });

// cỡ chữ tỉ lệ theo bề rộng khung
new ResizeObserver(() => { menu.style.setProperty("--u", menu.clientWidth / 100 + "px"); arrows(); }).observe(menu);

// mở / đóng popup
const close = () => overlay.classList.remove("open");
$("#btn-record").onclick = () => overlay.classList.add("open");
overlay.addEventListener("click", e => { if (!e.target.closest("#menu")) close(); });
addEventListener("keydown", e => e.key === "Escape" && close());


render();

/* ===== HIỆU ỨNG ===== */
const stage = $(".stage"), logo = $("#logo");
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rnd = (a, b) => a + Math.random() * (b - a);
const flash = (el, cls, ms) => { el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms); };

// bật màn hình CRT khi tải xong, kèm glitch nhẹ
function boot() {
  if (calm) return stage.classList.add("live");
  stage.classList.add("boot");
}
stage.addEventListener("animationend", e => { if (e.animationName === "crt") stage.classList.replace("boot", "live"); });
document.readyState === "complete" ? boot() : addEventListener("load", boot);

// thỉnh thoảng glitch ở màn hình chính; glitch logo khi popup mở
(function loop() {
  setTimeout(() => { if (!calm && stage.classList.contains("live") && !overlay.classList.contains("open")) flash(stage, "glitch", 400); loop(); }, rnd(10000, 25000));
})();
(function loopLogo() {
  setTimeout(() => { if (!calm && overlay.classList.contains("open")) flash(logo, "g", 320); loopLogo(); }, rnd(2200, 5000));
})();

// đốm sáng nhỏ trôi nhẹ như đom đóm; thêm đốm cyan/hồng quanh logo khi popup mở
const cv = $("#fx"), cx = cv.getContext("2d"), P = [];
let W, H, D;
const fit = () => { D = Math.min(devicePixelRatio || 1, 2); W = cv.width = innerWidth * D; H = cv.height = innerHeight * D; };
addEventListener("resize", fit); fit();
function dot(x, y, hot) {
  P.push({ x, y, hot, t: 0, r: rnd(.8, 2.4) * D * (hot ? 1.3 : 1), vx: rnd(-.12, .12) * D, vy: rnd(-.25, -.03) * D,
    ph: rnd(0, 6.28), sp: rnd(.6, 1.8), life: hot ? rnd(180, 360) : rnd(500, 1100),
    c: hot ? (Math.random() < .5 ? "120,235,255" : "255,120,215") : "255,225,255" });
}
function tick(now) {
  cx.clearRect(0, 0, W, H); cx.globalCompositeOperation = "lighter";
  const open = overlay.classList.contains("open");
  const want = Math.min(46, Math.max(18, (innerWidth * innerHeight / 24000) | 0));
  if (P.filter(p => !p.hot).length < want && Math.random() < .3) dot(rnd(0, W), rnd(0, H), false);
  if (open && P.filter(p => p.hot).length < 26 && Math.random() < .5) {
    const r = logo.getBoundingClientRect();
    dot(rnd(r.left - 30, r.right + 30) * D, rnd(r.top - 30, r.bottom + 30) * D, true);
  }
  for (let i = P.length - 1; i >= 0; i--) {
    const p = P[i]; p.t++;
    p.x += p.vx + Math.sin(now / 1000 * p.sp + p.ph) * .15 * D; p.y += p.vy;
    const k = p.t / p.life;
    if (k >= 1 || p.y < -20) { P.splice(i, 1); continue; }
    const a = Math.sin(k * Math.PI) * (.45 + .45 * Math.sin(now / 400 * p.sp + p.ph));
    const g = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
    g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(1, `rgba(${p.c},0)`);
    cx.fillStyle = g; cx.beginPath(); cx.arc(p.x, p.y, p.r * 4, 0, 6.283); cx.fill();
  }
  requestAnimationFrame(tick);
}
if (!calm) requestAnimationFrame(tick);

// nhạc nền (assets/music.mp3) + nút bật/tắt. Trình duyệt thường chặn tự phát nên sẽ phát ở lần chạm đầu tiên.
