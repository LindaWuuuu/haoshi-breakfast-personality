const questions = [
  {
    text: "工作日早晨，早餐越快解决越安心。",
    dimension: "节奏",
    agree: "F",
    disagree: "S",
  },
  {
    text: "坐下来慢慢吃完早餐，会让我一天更有秩序。",
    dimension: "节奏",
    agree: "S",
    disagree: "F",
  },
  {
    text: "出门前，我更愿意拿起一个面包就走。",
    dimension: "节奏",
    agree: "F",
    disagree: "S",
  },
  {
    text: "一杯饮品配面包的晨间仪式，对我很重要。",
    dimension: "节奏",
    agree: "S",
    disagree: "F",
  },
  {
    text: "早餐最好不要占用太多等待和决策时间。",
    dimension: "节奏",
    agree: "F",
    disagree: "S",
  },
  {
    text: "奶香、巧克力、夹心这类甜味更能治愈我的早晨。",
    dimension: "口味",
    agree: "T",
    disagree: "X",
  },
  {
    text: "咸香、有料、有蛋或芝士的早餐更能唤醒我。",
    dimension: "口味",
    agree: "X",
    disagree: "T",
  },
  {
    text: "压力大的早晨，我会更想吃软软甜甜的面包。",
    dimension: "口味",
    agree: "T",
    disagree: "X",
  },
  {
    text: "早餐如果只有甜口，我会觉得少了点正餐感。",
    dimension: "口味",
    agree: "X",
    disagree: "T",
  },
  {
    text: "看到甜口新品时，我通常比看到咸口新品更心动。",
    dimension: "口味",
    agree: "T",
    disagree: "X",
  },
  {
    text: "早餐必须顶饿，不然后半个上午很容易掉线。",
    dimension: "能量",
    agree: "B",
    disagree: "L",
  },
  {
    text: "我更喜欢轻盈不压肚子的早餐。",
    dimension: "能量",
    agree: "L",
    disagree: "B",
  },
  {
    text: "选面包时，我会优先看分量和夹心满足感。",
    dimension: "能量",
    agree: "B",
    disagree: "L",
  },
  {
    text: "早上吃得太扎实，会影响我的状态。",
    dimension: "能量",
    agree: "L",
    disagree: "B",
  },
  {
    text: "能撑到午饭，是我评价早餐的重要标准。",
    dimension: "能量",
    agree: "B",
    disagree: "L",
  },
  {
    text: "买早餐时，熟悉口味带来的稳定感比惊喜更重要。",
    dimension: "选择",
    agree: "C",
    disagree: "N",
  },
  {
    text: "新品或限定口味会让我忍不住想试试。",
    dimension: "选择",
    agree: "N",
    disagree: "C",
  },
  {
    text: "找到喜欢的早餐后，我能连续复购很久。",
    dimension: "选择",
    agree: "C",
    disagree: "N",
  },
  {
    text: "我喜欢给早餐换搭配，今天和昨天最好不一样。",
    dimension: "选择",
    agree: "N",
    disagree: "C",
  },
  {
    text: "比起安全牌，我更愿意把早餐当成小小探索。",
    dimension: "选择",
    agree: "N",
    disagree: "C",
  },
];

const optionSet = [
  { value: 3, label: "非常同意", side: "agree" },
  { value: 2, label: "比较同意", side: "agree" },
  { value: 1, label: "有点同意", side: "agree" },
  { value: 0, label: "中立", side: "neutral" },
  { value: -1, label: "有点不同意", side: "disagree" },
  { value: -2, label: "比较不同意", side: "disagree" },
  { value: -3, label: "非常不同意", side: "disagree" },
];

const dimensionPairs = [
  {
    key: "pace",
    left: "F",
    right: "S",
    leftLabel: "快充",
    rightLabel: "慢享",
    tie: "S",
  },
  {
    key: "taste",
    left: "T",
    right: "X",
    leftLabel: "甜愈",
    rightLabel: "咸醒",
    tie: "T",
  },
  {
    key: "energy",
    left: "B",
    right: "L",
    leftLabel: "稳饱",
    rightLabel: "轻盈",
    tie: "B",
  },
  {
    key: "choice",
    left: "C",
    right: "N",
    leftLabel: "经典",
    rightLabel: "尝鲜",
    tie: "N",
  },
];

const resultMap = {
  FTBC: {
    name: "通勤续命战士",
    summary: "快速、甜口、顶饱、经典，早八路上的能量补给派。",
    tags: ["快充", "甜口", "顶饱", "经典"],
    description:
      "你不追求复杂，早餐要在关键时刻把你托住。熟悉的甜香、扎实的饱腹感，是你面对上午任务的稳定开关。",
    product: "适合绑定奶香夹心面包、手撕面包、经典蛋糕类产品。",
    pairing: "奶香面包 + 热牛奶",
  },
  FTBN: {
    name: "甜能量冒险家",
    summary: "快速、甜口、顶饱、尝鲜，看到新品甜面包就想试。",
    tags: ["快充", "甜口", "顶饱", "尝鲜"],
    description:
      "你要效率，也要一点甜味惊喜。忙归忙，新口味和高满足感仍然能让你的早晨亮起来。",
    product: "适合绑定爆浆夹心、巧克力、奶油风味和季节限定甜口产品。",
    pairing: "甜口面包 + 冰拿铁",
  },
  FTLC: {
    name: "奶香轻补给",
    summary: "快速、甜口、轻盈、经典，喜欢小份柔软的治愈早餐。",
    tags: ["快充", "甜口", "轻盈", "经典"],
    description:
      "你喜欢早餐轻轻托一下状态，不需要太隆重。柔软、顺口、熟悉的小甜味，刚好给早晨一个温柔缓冲。",
    product: "适合绑定小包装奶香面包、轻甜蛋糕、早餐小点类产品。",
    pairing: "轻甜面包 + 原味酸奶",
  },
  FTLN: {
    name: "甜点灵感派",
    summary: "快速、甜口、轻盈、尝鲜，早餐像开盲盒一样有趣。",
    tags: ["快充", "甜口", "轻盈", "尝鲜"],
    description:
      "你不想被早餐拖慢，但也不想每天都一模一样。小份、新口味、好入口，是你给自己的晨间灵感。",
    product: "适合绑定迷你甜口、果味夹心、限定包装和组合装产品。",
    pairing: "果味面包 + 美式咖啡",
  },
  FXBC: {
    name: "咸香打工人",
    summary: "快速、咸口、顶饱、经典，目标明确：吃完能扛事。",
    tags: ["快充", "咸口", "顶饱", "经典"],
    description:
      "你对早餐的要求很实际：快、稳、抗饿。经典咸香和饱腹感，是你进入工作状态的启动键。",
    product: "适合绑定肉松、芝士、厚蛋、吐司三明治等咸香产品。",
    pairing: "咸香面包 + 无糖豆浆",
  },
  FXBN: {
    name: "早八冲锋官",
    summary: "快速、咸口、顶饱、尝鲜，偏爱强风味和高能量组合。",
    tags: ["快充", "咸口", "顶饱", "尝鲜"],
    description:
      "你像给自己装了晨间推进器。越是忙碌的早晨，越需要有料、有存在感的新鲜组合来把状态拉满。",
    product: "适合绑定咸口新品、芝士肉松、厚切吐司和高饱腹组合。",
    pairing: "有料咸口面包 + 黑咖啡",
  },
  FXLC: {
    name: "清醒效率派",
    summary: "快速、咸口、轻盈、经典，早餐要利落、不腻、不拖沓。",
    tags: ["快充", "咸口", "轻盈", "经典"],
    description:
      "你喜欢利落的早晨，味道要清醒，分量要刚好。稳定的咸香轻食能让你不空腹，也不被早餐拖住。",
    product: "适合绑定轻咸吐司、薄切三明治、小包装咸口面包。",
    pairing: "轻咸面包 + 清茶",
  },
  FXLN: {
    name: "咸口实验家",
    summary: "快速、咸口、轻盈、尝鲜，喜欢新奇搭配和小份咸香。",
    tags: ["快充", "咸口", "轻盈", "尝鲜"],
    description:
      "你不喜欢沉重早餐，但愿意为新鲜口味停留一秒。小份咸香、不同搭配，是你早晨的小试验。",
    product: "适合绑定小规格咸口新品、芝士风味、轻量组合装。",
    pairing: "咸口小面包 + 气泡水",
  },
  STBC: {
    name: "晨间治愈家",
    summary: "慢享、甜口、顶饱、经典，早餐是稳定的幸福来源。",
    tags: ["慢享", "甜口", "顶饱", "经典"],
    description:
      "你认真对待早餐，也认真对待自己的状态。经典甜香加饱腹感，是你把一天过稳的温柔方式。",
    product: "适合绑定经典甜面包、厚切吐司、奶香蛋糕和家庭分享装。",
    pairing: "厚切甜吐司 + 热咖啡",
  },
  STBN: {
    name: "甜蜜收藏家",
    summary: "慢享、甜口、顶饱、尝鲜，喜欢把新品吃成早餐仪式。",
    tags: ["慢享", "甜口", "顶饱", "尝鲜"],
    description:
      "你享受早餐，也享受发现。新甜味、新包装、新搭配，都可能成为你近期反复提起的小快乐。",
    product: "适合绑定甜口新品、夹心系列、节日限定和礼盒组合。",
    pairing: "夹心面包 + 燕麦奶拿铁",
  },
  STLC: {
    name: "云朵早餐人",
    summary: "慢享、甜口、轻盈、经典，偏爱柔软、奶香、舒适感。",
    tags: ["慢享", "甜口", "轻盈", "经典"],
    description:
      "你的早餐关键词是舒服。你会给早晨留一点余地，用熟悉的柔软甜味慢慢醒来。",
    product: "适合绑定软欧、奶香小面包、轻甜蛋糕和低负担早餐点。",
    pairing: "奶香小面包 + 温牛奶",
  },
  STLN: {
    name: "松弛甜梦家",
    summary: "慢享、甜口、轻盈、尝鲜，审美型、氛围感早餐玩家。",
    tags: ["慢享", "甜口", "轻盈", "尝鲜"],
    description:
      "你吃早餐，也在经营一种好心情。轻甜、新鲜、好看好搭，是你打开早晨的理想方式。",
    product: "适合绑定果味甜口、轻甜新品、联名包装和下午茶式早餐组合。",
    pairing: "果味轻甜面包 + 花茶",
  },
  SXBC: {
    name: "经典饱腹派",
    summary: "慢享、咸口、顶饱、经典，早餐要扎实、可靠、有满足感。",
    tags: ["慢享", "咸口", "顶饱", "经典"],
    description:
      "你相信早餐要吃得踏实。经典咸香、足量主食和稳定搭配，是你面对一天的底气。",
    product: "适合绑定肉松吐司、芝士厚片、三明治类和高饱腹家庭装。",
    pairing: "经典咸口面包 + 豆浆",
  },
  SXBN: {
    name: "风味探索者",
    summary: "慢享、咸口、顶饱、尝鲜，喜欢丰富口感和新鲜组合。",
    tags: ["慢享", "咸口", "顶饱", "尝鲜"],
    description:
      "你愿意为一份有层次的早餐多停留一会儿。丰富馅料、咸香风味和新品组合，能让你越吃越有兴致。",
    product: "适合绑定咸口限定、厚料三明治、肉松芝士组合和新品尝鲜装。",
    pairing: "厚料咸口面包 + 拿铁",
  },
  SXLC: {
    name: "清爽生活家",
    summary: "慢享、咸口、轻盈、经典，讲究均衡和舒服的早餐节奏。",
    tags: ["慢享", "咸口", "轻盈", "经典"],
    description:
      "你喜欢稳定，也懂得分寸。清爽咸香、不过度负担的早餐，让你的早晨更有掌控感。",
    product: "适合绑定轻咸吐司、低负担咸口、小份三明治和日常早餐装。",
    pairing: "轻咸面包 + 无糖酸奶",
  },
  SXLN: {
    name: "早晨美食策展人",
    summary: "慢享、咸口、轻盈、尝鲜，喜欢搭配、摆盘、分享感。",
    tags: ["慢享", "咸口", "轻盈", "尝鲜"],
    description:
      "你把早餐当成一天的第一场小策展。新口味、清爽搭配、好看呈现，都是你愿意分享的理由。",
    product: "适合绑定轻量咸口新品、组合装、联名包装和可搭配饮品的产品。",
    pairing: "咸口新品 + 冷萃茶",
  },
};

const answers = new Map();
let latestResult = null;

const questionList = document.querySelector("#questionList");
const progressText = document.querySelector("#progressText");
const progressHint = document.querySelector("#progressHint");
const progressBar = document.querySelector("#progressBar");
const submitButton = document.querySelector("#submitButton");
const submitTip = document.querySelector("#submitTip");
const quizForm = document.querySelector("#quizForm");
const resultSection = document.querySelector("#result");
const toast = document.querySelector("#toast");

function renderQuestions() {
  questionList.innerHTML = questions
    .map((question, index) => {
      const options = optionSet
        .map(
          (option) => `
            <button
              class="scale-option"
              type="button"
              role="radio"
              aria-checked="false"
              aria-label="第 ${index + 1} 题：${option.label}"
              data-question="${index}"
              data-value="${option.value}"
              data-side="${option.side}"
            ></button>
          `,
        )
        .join("");

      return `
        <article class="question-card" id="question-${index + 1}">
          <div class="question-card__meta">
            <span>第 ${String(index + 1).padStart(2, "0")} 题</span>
            <span class="dimension-pill">${question.dimension}维度</span>
          </div>
          <h3>${question.text}</h3>
          <div class="scale-block">
            <div class="scale-labels" aria-hidden="true">
              <span>同意</span>
              <span>不同意</span>
            </div>
            <div class="scale-options" role="radiogroup" aria-label="第 ${index + 1} 题选择">
              ${options}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateProgress() {
  const done = answers.size;
  const total = questions.length;
  const percent = Math.round((done / total) * 100);
  progressText.textContent = `已完成 ${done} / ${total}`;
  progressBar.style.width = `${percent}%`;

  if (done === total) {
    progressHint.textContent = "可以生成结果了";
    submitTip.textContent = "全部题目已完成，看看你的早餐人格。";
    submitButton.disabled = false;
  } else {
    progressHint.textContent = "完成全部题目后解锁结果";
    submitTip.textContent = `还差 ${total - done} 题，先别急着交卷。`;
    submitButton.disabled = true;
  }
}

function selectOption(button) {
  const questionIndex = Number(button.dataset.question);
  const value = Number(button.dataset.value);
  answers.set(questionIndex, value);

  const card = button.closest(".question-card");
  const options = card.querySelectorAll(".scale-option");
  options.forEach((option) => {
    option.classList.toggle("is-selected", option === button);
    option.setAttribute("aria-checked", option === button ? "true" : "false");
  });
  card.classList.add("is-answered");
  updateProgress();
}

function getScores() {
  const scores = {
    F: 0,
    S: 0,
    T: 0,
    X: 0,
    B: 0,
    L: 0,
    C: 0,
    N: 0,
  };

  answers.forEach((value, index) => {
    const question = questions[index];
    if (value > 0) {
      scores[question.agree] += value;
    }
    if (value < 0) {
      scores[question.disagree] += Math.abs(value);
    }
  });

  return scores;
}

function getTypeCode(scores) {
  return dimensionPairs
    .map((pair) => {
      const leftScore = scores[pair.left];
      const rightScore = scores[pair.right];
      if (leftScore === rightScore) {
        return pair.tie;
      }
      return leftScore > rightScore ? pair.left : pair.right;
    })
    .join("");
}

function renderScoreBoard(scores) {
  const maxScore = 15;
  return dimensionPairs
    .map((pair) => {
      const leftScore = scores[pair.left];
      const rightScore = scores[pair.right];
      const winner = leftScore === rightScore ? pair.tie : leftScore > rightScore ? pair.left : pair.right;
      const diff = Math.min(Math.abs(leftScore - rightScore), maxScore);
      const offset = `${Math.max(8, (diff / maxScore) * 50)}%`;
      const isLeft = winner === pair.left;
      const active = isLeft ? "var(--green)" : "var(--purple)";
      const direction = isLeft ? "-100%" : "0";

      return `
        <div class="score-row">
          <span>${pair.leftLabel} ${leftScore}</span>
          <div
            class="score-meter"
            style="--offset: ${offset}; --direction: ${direction}; --active: ${active};"
            aria-hidden="true"
          ></div>
          <span>${rightScore} ${pair.rightLabel}</span>
        </div>
      `;
    })
    .join("");
}

function renderResult(code, scores) {
  const result = resultMap[code] || resultMap.FTBC;
  latestResult = { code, ...result };

  document.querySelector("#resultCode").textContent = code;
  document.querySelector("#resultTitle").textContent = result.name;
  document.querySelector("#resultSubtitle").textContent = result.summary;
  document.querySelector("#resultDescription").textContent = result.description;
  document.querySelector("#resultProduct").textContent = result.product;
  document.querySelector("#resultPairing").textContent = result.pairing;
  document.querySelector("#resultTags").innerHTML = result.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#scoreBoard").innerHTML = renderScoreBoard(scores);

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function getShareText() {
  if (!latestResult) {
    return "";
  }
  return `我的豪士早餐人格是「${latestResult.name}」(${latestResult.code})：${latestResult.summary} 今日幸运搭配：${latestResult.pairing}。`;
}

function resetQuiz() {
  answers.clear();
  latestResult = null;
  document.querySelectorAll(".scale-option").forEach((option) => {
    option.classList.remove("is-selected");
    option.setAttribute("aria-checked", "false");
  });
  document.querySelectorAll(".question-card").forEach((card) => card.classList.remove("is-answered"));
  resultSection.hidden = true;
  updateProgress();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function fillRandomAnswers() {
  questions.forEach((_, index) => {
    const value = optionSet[Math.floor(Math.random() * optionSet.length)].value;
    answers.set(index, value);
    const button = document.querySelector(`.scale-option[data-question="${index}"][data-value="${value}"]`);
    if (button) {
      const card = button.closest(".question-card");
      card.querySelectorAll(".scale-option").forEach((option) => {
        option.classList.toggle("is-selected", option === button);
        option.setAttribute("aria-checked", option === button ? "true" : "false");
      });
      card.classList.add("is-answered");
    }
  });
  updateProgress();
  showToast("已随机选择一组答案，可直接生成结果。");
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

questionList.addEventListener("click", (event) => {
  const button = event.target.closest(".scale-option");
  if (button) {
    selectOption(button);
  }
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (answers.size !== questions.length) {
    showToast("还有题目没有选择。");
    return;
  }
  const scores = getScores();
  renderResult(getTypeCode(scores), scores);
});

document.querySelector("#restartQuiz").addEventListener("click", resetQuiz);

document.querySelector("#copyResult").addEventListener("click", async () => {
  const text = getShareText();
  if (!text) {
    showToast("还没有生成结果。");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("分享文案已复制。");
  } catch {
    showToast(text);
  }
});

document.querySelector("#randomDemo").addEventListener("click", fillRandomAnswers);

renderQuestions();
updateProgress();
