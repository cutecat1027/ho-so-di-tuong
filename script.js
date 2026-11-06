/* ===== NỘI DUNG: DATA[số chapter], đếm từ 0 (0 = chapter 01 ... 9 = chapter 10) ===== */
const NAMES = { mc: "MC", sylus: "Sylus" };
const DATA = {
  0: {
    title: "Khối Cầu Thủy Tinh",
    lines: [
      ["Sylus", "Chú ý đến những dao động năng lượng xung quanh những quả cầu này. Đừng đến gần quá"],
      ["mc", "Muộn rồi... Em vừa bị một loạt những ảo ảnh kỳ lạ tấn công"],
      ["Sylus", "Tsk, tsk... Hiệp Hội Thợ Săn của em đúng là ám ảnh với mấy dao động Metaflux nhỉ."],
      ["Sylus", "Chỉ cần mang chúng về là có thể coi như xong việc phải không?"],
      ["mc", "Lòng tự tôn của một Thợ săn không cho phép em kết thúc cuộc điều tra này một cách qua loa như thế đâu."],
      ["mc", "Dù gì thì chúng ta cũng đã đến tận đây rồi. Chi bằng cứ lần theo những manh mối bên trong mấy quả cầu này để tìm ra chủ nhân của chúng đi."],
      ["Sylus", "Hóa ra đây là lý do mà em cứ tăng ca mãi không nghỉ đấy à, mèo nhỏ. Được rồi, anh sẽ đi cùng em."],
      ["Sylus", "Nhìn gì chứ? Đây đâu phải lần đầu anh làm việc như thế này."],
      ["Sylus", "Vậy em định bắt đầu cuộc điều tra từ đâu đây?"],
    ],
  },
  1: {
    title: "Một Thành Phố Khác",
    lines: [
      ["mc", "Cửa sổ vát góc, tủ lưu trữ màu xám, rồi cả mấy cỗ máy không rõ tên nữa..."],
      ["mc", "Nơi được tái hiện trong khối cầu ký ức này là ở đâu vậy nhỉ?"],
      ["xavier", "Chắc là một văn phòng."],
      ["xavier", "Khung cửa sổ chữ L kết hợp với độ cao của tòa nhà có thể quan sát rộng hơn."],
      ["xavier", "Còn về phần mấy món vũ khí đặt trên bàn và dãy tủ lưu trữ lớn dọc theo tường..."],
      ["xavier", "Văn phòng này khả năng cao là của lực lượng hành pháp của thành phố."],
      ["mc", "Anh quan sát tỉ mỉ thật đó. Ngay cả vụ góc nhìn rộng mà anh cũng để ý tới nữa!"],
      ["xavier", "Góc nhìn đắc địa không chỉ giúp ích để truy bắt tội phạm thôi đâu."],
      ["xavier", "Nó còn rất hợp để tăm tia xem tan làm nên đi ăn khuya ở đâu nữa."],
    ],
  },
  2: {
    title: "Nhân Bản",
    lines: [
      ["mc", "Cách thức thực thi pháp luật ở đây đáng sợ thật đấy. Sao lại có thể đánh ngất người ta ngay giữa đường thế kia..."],
      ["mc", "Hình như em nghe thấy mấy sĩ quan truy bắt nói là anh ta 'di cư trái phép' đến Trái Đất phải không?"],
      ["xavier", "Ừm, người bị bắt vốn không phải là cư dân của hành tinh này."],
      ["xavier", "Phạm vi hoạt động hợp pháp của bọn họ có lẽ chỉ giới hạn ở một vài hành tinh vùng rìa mà thôi."],
      ["mc", "Ngay cả chuyện này mà anh cũng biết sao?"],
      ["xavier", "Người ngoài hành tinh đến Trái Đất trước tiên đều phải học cách ẩn mình thật kỹ."],
      ["xavier", "Bởi vì con người sẽ không cho phép một tồn tại chưa được công nhận đặt chân vào lãnh thổ của mình đâu."],
      ["xavier", "Kịch bản phim hay diễn như vậy mà."],
    ],
  },
  3: {
    title: "Bài Kiểm Tra Cơ Sở",
    lines: [
      ["mc", "Xavier, anh mà cũng vượt qua được bài kiểm tra cơ sở cơ á?"],
      ["xavier", "Nhìn qua quả cầu thủy tinh là thấy được mà, nội dung kiểm tra chỉ là lặp lại từ ở cuối câu thôi, đâu có khó lắm."],
      ["mc", "Không thể nào. Em yêu cầu kiểm tra thêm!"],
      ["mc", "Làm đám Wanderer khắp thành phố Linkon nghe danh đã sợ mất mật. Xavier."],
      ["xavier", "Xavier."],
      ["mc", "Cậy mình đẹp trai rồi ở nhà muốn làm gì thì làm. Xavier."],
      ["xavier", "... Không phải Xavier."],
      ["xavier", "Xem ra anh không thể vượt qua bài kiểm tra của em rồi."],
      ["xavier", "Có cần phải cùng em quay về nhà máy bảo trì lại không? "],
    ],
  },
  4: {
    title: "Sản Phẩm Bầu Bạn",
    lines: [
      ["xavier", "Khẩu hiệu quảng cáo của sản phẩm bầu bạn này là..."],
      ["xavier", "'Mọi lời bạn muốn nghe.'"],
      ["xavier", "Có người cần sản phẩm như thế này luôn hả?"],
      ["mc", "Chẳng phải nhiều lúc anh cũng dùng đủ chiêu dụ dỗ ép buộc em nói mấy lời ngọt ngào dễ nghe đó sao."],
      ["mc", "Kiểu như 'Xavier tuyệt nhất', 'Anh Xavier là tốt nhất'... vậy á."],
      ["xavier", "... Còn phải xem người nói những lời đó là ai đã."],
      ["xavier", "Có những lời nếu do người quan trọng nói ra thì sẽ mang ý nghĩa rất đặc biệt."],
      ["xavier", "Chứ không chỉ đơn thuần là ngọt ngào dễ nghe nữa."],
    ],
  },
  5: {
    title: "Tái Hiện Khung Cảnh",
    lines: [
      ["mc", "Em mượn được thiết bị tái hiện rồi này. Em muốn thử mô phỏng lại khung cảnh bên trong quả cầu thủy tinh này xem sao."],
      ["mc", "...Ôi, một bé Xavier siêu to khổng lồ!"],
      ["xavier", "Còn em thì bé xíu xiu."],
      ["xavier", "Có cần anh soi sáng con đường để em chạy đến trước mặt anh không?"],
      ["xavier", "...Hình như quả cầu ánh sáng cũng bị phóng to theo luôn rồi."],
      ["mc", "Nhỉ? Quả cầu ánh sáng của anh to y như mặt trăng luôn!"],
      ["xavier", "Nhưng ở trong hình chiếu, dù anh có chạm đầu ngón tay vào em thì cũng chẳng có cảm giác chân thực gì cả."],
      ["xavier", "Không cảm nhận được cũng không sao. Ít nhất thì lúc này, anh có thể giúp em soi sáng con đường dưới chân."],
    ],
  },
  6: {
    title: "Chế Tạo Ký Ức",
    lines: [
      ["mc", "Trong thế giới của quả cầu thủy tinh này, ngay cả ký ức cũng có thể được chế tạo sao?"],
      ["mc", "Xavier, anh đã bao giờ nghĩ về chuyện ký ức có thể là giả chưa?"],
      ["xavier", "Chưa từng. Dù sao bất kể thật hay giả, anh cũng rất hay nhớ không rõ..."],
      ["xavier", "Đều là chuyện của quá khứ cả rồi. So với việc cứ mãi bận tâm xem chúng là thật hay giả..."],
      ["xavier", "Anh muốn dành tâm sức vào chuyện đang diễn ra ở hiện tại hơn."],
      ["mc", "Nhưng lỡ như những hồi ức tươi đẹp giữa tụi mình là giả thì sao?"],
      ["xavier", "Vậy cứ lập một danh sách những ký ức đó ra, tụi mình cùng kiểm tra lại từng cái một."],
      ["xavier", "Gặp ký ức nào đáng ngờ thì mình sẽ tái hiện lại lần nữa..."],
      ["xavier", "Cho đến khi xác nhận được tất cả chúng đều là thật một trăm phần trăm mới thôi."],
    ],
  },
   7: {
    title: "Em Là Đặc Biệt",
    lines: [
      ["xavier", "Nếu ở thành phố này cái gì cũng có thể chế tạo ra, vậy chẳng còn gì là đặc biệt nữa rồi."],
      ["mc", "Anh nói làm em cũng thấy rén rén luôn. Em phải cố gắng trở nên độc nhất vô nhị hơn nữa mới được!"],
      ["xavier", "Ừm, anh cũng sẽ cố gắng."],
      ["xavier", "Em đã có kế hoạch gì chưa?"],
      ["mc", "...Chưa có. Cho em tham khảo chút đi, anh thấy em đặc biệt ở điểm nào?"],
      ["xavier", "Lúc em mới ngủ dậy vào buổi sáng, tóc em chỉa theo góc độ rất đặc biệt."],
      ["mc", "Khoản này anh cũng đâu có kém cạnh gì."],
      ["xavier", "Vậy nên cả hai tụi mình đều không cần phải lo lắng về chuyện bị nhân bản đâu."],
      ["xavier", "Chỉ cần là chính mình thôi đã đủ đặc biệt lắm rồi."],
    ],
  },
    8: {
    title: "Sự Thật Chưa Chạm Tới",
    lines: [
      ["mc", "Hiệp hội nói thành phố trong quả cầu ký ức không thuộc về thế giới nào chúng ta biết. Chẳng có cách nào thật sự đặt chân đến đó cả."],
      ["xavier", "Vậy thì thử cách phi thực tế xem sao... chẳng hạn như dùng trí tưởng tượng?"],
      ["xavier", "Dù khi thật sự nhìn thấy thành phố đó rồi, cảm giác hồi hộp mong chờ điều bí ẩn cũng biến mất."],
      ["xavier", "Nhưng ít ra giờ tụi mình có thể chắp ghép những mảnh vỡ vụn vặt lại, từ từ khôi phục sự sống động đó."],
      ["mc", "Nghe có lý ghê. Vậy theo lời anh nói thì..."],
      ["mc", "Tụi mình tiếp xúc như vầy chẳng phải sẽ thu hẹp không gian tưởng tượng hay sao?"],
      ["xavier", "Có đấy. Thế nên lúc đang nắm tay nhau thế này, em nhớ phải nghĩ về tụi mình nhiều hơn một chút nhé."],
      ["xavier", "Để bù đắp lại phần không gian đã bị thu hẹp đấy."],
    ],
  },
  9: {
    title: "Vì Em Mà Trở Nên Chân Thật",
    lines: [
      ["mc", "Em đã báo cáo toàn bộ những gì tụi mình nhìn thấy lần này cho Hiệp hội rồi."],
      ["mc", "Cho đến khi tìm ra cách quay về thế giới đó, những quả cầu thủy tinh này đành phải nằm phủ bụi ở Hiệp hội thôi."],
      ["xavier", "Xét trên quy mô vũ trụ, thật ra chúng vẫn đang phiêu bạt đấy chứ."],
      ["xavier", "Việc chúng đi ngang qua thế giới của tụi mình chỉ là một trùng hợp về mặt xác suất."],
      ["mc", "Góc nhìn lãng mạn ghê! Hay là tụi mình cũng niêm phong vài ký ức lại rồi để chúng phiêu bạt nhé?"],
      ["xavier", "Nếu vậy thì phải cân nhắc thật kỹ những mảnh ký ức muốn niêm phong mới được. Chẳng hạn như..."],
      ["xavier", "Ai nhặt được quả cầu này... vừa mở ra là thấy..."],
      ["xavier", "Hai người nhặt được quả cầu ký ức và đang ngồi xem lại ký ức do người đi trước niêm phong."],
      ["mc", "...Anh tính làm cuộc thi chạy tiếp sức cấp vũ trụ hay gì?"],
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
function music() {
  const bgm = new Audio("assets/music.mp3"), snd = $("#snd");
  let userOff = false;
  bgm.loop = true; bgm.volume = .7;
  bgm.addEventListener("play", () => snd.classList.add("on"));
  bgm.addEventListener("pause", () => snd.classList.remove("on"));
  snd.onclick = () => { if (bgm.paused) { userOff = false; bgm.play().catch(() => {}); } else { userOff = true; bgm.pause(); } };
  const go = () => { if (!userOff && bgm.paused) bgm.play().catch(() => {}); };
  go();
  ["pointerdown", "keydown"].forEach(ev => addEventListener(ev, e => { if (!e.target.closest?.("#snd")) go(); }, { passive: true }));
}
document.readyState === "complete" ? music() : addEventListener("load", music);
