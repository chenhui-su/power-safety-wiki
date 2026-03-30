export interface SectionMeta {
  id: string;
  title: string;
}

export interface PrototypeEvent {
  id: string;
  slug: string;
  year: number;
  dateLabel: string;
  title: string;
  titleEn: string;
  location: string;
  affectedLabel: string;
  affectedCount: number;
  duration: string;
  cause: string;
  hook: string;
  act: number;
  coordinates: [number, number];
  status?: "latest";
}

export interface ActMeta {
  act: number;
  sectionId: string;
  title: string;
  subtitle: string;
  theme: string;
  whisper: string;
}

export interface ArchiveSection {
  heading: string;
  body: string;
}

export interface ArchiveDetail {
  eventId: string;
  code: string;
  date: string;
  title: string;
  region: string;
  impact: string;
  trigger: string;
  lesson: string;
  lead: string;
  sections: ArchiveSection[];
  docs: string[];
  videoTitle: string;
  videoUrl: string;
  videoNote: string;
}

export const sectionMeta: SectionMeta[] = [
  { id: "hero", title: "序章" },
  { id: "empathy", title: "停电时刻" },
  { id: "globalmap", title: "黑暗版图" },
  { id: "act1", title: "第一幕 · 脆弱与觉醒" },
  { id: "act2", title: "第二幕 · 自然之力" },
  { id: "act3", title: "第三幕 · 连锁崩塌" },
  { id: "act4", title: "第四幕 · 新时代，新威胁" },
  { id: "act5", title: "第五幕 · 此刻" },
  { id: "finaleA", title: "尾声 · 记忆" },
  { id: "finaleB", title: "尾声 · 我们" },
  { id: "finaleC", title: "档案总览" },
];

export const acts: ActMeta[] = [
  {
    act: 1,
    sectionId: "act1",
    title: "脆弱与觉醒",
    subtitle: "Fragility & Awakening",
    theme: "人类第一次直面电网的脆弱",
    whisper: "1965 年，超大互联系统的脆弱性第一次被大范围看见。",
  },
  {
    act: 2,
    sectionId: "act2",
    title: "自然之力",
    subtitle: "Force of Nature",
    theme: "自然面前，电网从来不是绝对安全的。",
    whisper: "从太阳风暴到极端风暴，系统设计被迫重新回答边界条件。",
  },
  {
    act: 3,
    sectionId: "act3",
    title: "连锁崩塌",
    subtitle: "Cascading Collapse",
    theme: "真正可怕的，不是一个故障，而是它怎样蔓延。",
    whisper: "一棵树、一条线、一段计划切换，都可能成为系统级黑暗的起点。",
  },
  {
    act: 4,
    sectionId: "act4",
    title: "新时代，新威胁",
    subtitle: "New Era, New Threats",
    theme: "威胁在进化，边界也在改变。",
    whisper: "网络攻击、极端天气和制度约束，让电力安全成为跨学科问题。",
  },
  {
    act: 5,
    sectionId: "act5",
    title: "此刻",
    subtitle: "Right Now",
    theme: "故事没有结束，档案还在继续书写。",
    whisper: "今天发生的停电，明天就会成为新的教材。",
  },
];

export const events: PrototypeEvent[] = [
  {
    id: "1965-northeast",
    slug: "1965-us-northeast",
    year: 1965,
    dateLabel: "1965.11.09",
    title: "北美大停电",
    titleEn: "Northeast Blackout",
    location: "美国东北部、加拿大安大略",
    affectedLabel: "3000万人",
    affectedCount: 30000000,
    duration: "13小时",
    cause: "继电器保护误动作引发连锁故障",
    hook: "一个继电器，瘫痪一个大陆",
    act: 1,
    coordinates: [-73.94, 40.67],
  },
  {
    id: "1977-nyc",
    slug: "1977-nyc-blackout",
    year: 1977,
    dateLabel: "1977.07.13",
    title: "纽约大停电",
    titleEn: "New York City Blackout",
    location: "美国纽约市",
    affectedLabel: "900万人",
    affectedCount: 9000000,
    duration: "25小时",
    cause: "雷击引发连锁跳闸",
    hook: "黑暗中，人性的两面浮现",
    act: 1,
    coordinates: [-74.006, 40.7128],
  },
  {
    id: "1989-quebec",
    slug: "1989-quebec-blackout",
    year: 1989,
    dateLabel: "1989.03.13",
    title: "魁北克大停电",
    titleEn: "Quebec Blackout",
    location: "加拿大魁北克省",
    affectedLabel: "600万人",
    affectedCount: 6000000,
    duration: "9小时",
    cause: "太阳风暴引发地磁感应电流",
    hook: "太阳打了个喷嚏，地球暗了",
    act: 2,
    coordinates: [-71.21, 46.81],
  },
  {
    id: "2003-us-canada",
    slug: "2003-us-canada",
    year: 2003,
    dateLabel: "2003.08.14",
    title: "美加大停电",
    titleEn: "US-Canada Blackout",
    location: "美国东北部、加拿大安大略",
    affectedLabel: "5500万人",
    affectedCount: 55000000,
    duration: "长达4天",
    cause: "输电线路触碰树枝引发级联故障",
    hook: "一棵树碰到一根线，5500万人的黑夜",
    act: 3,
    coordinates: [-81.69, 41.5],
  },
  {
    id: "2003-italy",
    slug: "2003-italy",
    year: 2003,
    dateLabel: "2003.09.28",
    title: "意大利大停电",
    titleEn: "Italy Blackout",
    location: "意大利全境",
    affectedLabel: "5600万人",
    affectedCount: 56000000,
    duration: "12小时",
    cause: "瑞意联络线跳闸引发连锁",
    hook: "同一年，大洋彼岸的警钟",
    act: 3,
    coordinates: [12.49, 41.9],
  },
  {
    id: "2006-europe",
    slug: "2006-europe",
    year: 2006,
    dateLabel: "2006.11.04",
    title: "欧洲大停电",
    titleEn: "European Blackout",
    location: "西欧多国",
    affectedLabel: "1500万人",
    affectedCount: 15000000,
    duration: "约2小时",
    cause: "高压线路停运导致电网分裂",
    hook: "一条船过河，半个欧洲失电",
    act: 3,
    coordinates: [7.49, 51.43],
  },
  {
    id: "2012-india",
    slug: "2012-india",
    year: 2012,
    dateLabel: "2012.07.31",
    title: "印度大停电",
    titleEn: "India Blackout",
    location: "印度北部、东部、东北部",
    affectedLabel: "6.7亿人",
    affectedCount: 670000000,
    duration: "超过15小时",
    cause: "电网过负荷与区域间功率不平衡",
    hook: "6.7亿人，人类史上最大规模",
    act: 2,
    coordinates: [77.21, 28.61],
  },
  {
    id: "2015-ukraine",
    slug: "2015-ukraine-cyberattack",
    year: 2015,
    dateLabel: "2015.12.23",
    title: "乌克兰电网网络攻击",
    titleEn: "Ukraine Power Grid Cyberattack",
    location: "乌克兰伊万诺-弗兰科夫斯克",
    affectedLabel: "23万人",
    affectedCount: 230000,
    duration: "6小时",
    cause: "BlackEnergy 恶意软件远程攻击 SCADA 系统",
    hook: "电网，第一次被真正意义上的“入侵”",
    act: 4,
    coordinates: [24.71, 48.92],
  },
  {
    id: "2016-south-australia",
    slug: "2016-south-australia-blackout",
    year: 2016,
    dateLabel: "2016.09.28",
    title: "南澳大利亚大停电",
    titleEn: "South Australia Blackout",
    location: "澳大利亚南澳州",
    affectedLabel: "170万人",
    affectedCount: 1700000,
    duration: "超过50小时",
    cause: "极端风暴导致输电线路连续跳闸",
    hook: "风暴与风电的博弈",
    act: 2,
    coordinates: [138.6, -34.93],
  },
  {
    id: "2019-argentina",
    slug: "2019-argentina-blackout",
    year: 2019,
    dateLabel: "2019.06.16",
    title: "阿根廷及乌拉圭大停电",
    titleEn: "Argentina-Uruguay Blackout",
    location: "阿根廷、乌拉圭全境",
    affectedLabel: "4800万人",
    affectedCount: 48000000,
    duration: "超过15小时",
    cause: "输电系统故障引发全网崩溃",
    hook: "一个国家，从电网地图上消失",
    act: 4,
    coordinates: [-58.38, -34.6],
  },
  {
    id: "2019-uk",
    slug: "2019-uk-blackout",
    year: 2019,
    dateLabel: "2019.08.09",
    title: "英国 8·9 大停电",
    titleEn: "UK 8·9 Blackout",
    location: "英格兰、威尔士",
    affectedLabel: "100万人",
    affectedCount: 1000000,
    duration: "约45分钟",
    cause: "风电机组与燃气机组接连脱网",
    hook: "发达国家也不自动免疫",
    act: 4,
    coordinates: [-0.1276, 51.5074],
  },
  {
    id: "2021-texas",
    slug: "2021-texas-blackout",
    year: 2021,
    dateLabel: "2021.02.15",
    title: "德州大停电",
    titleEn: "Texas Power Crisis",
    location: "美国德克萨斯州",
    affectedLabel: "450万户",
    affectedCount: 4500000,
    duration: "超过4天",
    cause: "极寒天气导致发电设备大面积冻结",
    hook: "冰封的孤岛，市场化的代价",
    act: 4,
    coordinates: [-97.74, 30.27],
  },
  {
    id: "2025-iberia",
    slug: "2025-iberia-blackout",
    year: 2025,
    dateLabel: "2025.04.28",
    title: "伊比利亚半岛大停电",
    titleEn: "Iberian Peninsula Blackout",
    location: "西班牙、葡萄牙",
    affectedLabel: "超过5000万人",
    affectedCount: 50000000,
    duration: "约12小时",
    cause: "调查中，仍适合持续补充时间线与核实信息",
    hook: "就在此刻，故事仍在继续",
    act: 5,
    coordinates: [-3.7, 40.42],
    status: "latest",
  },
];

export const heroCopy = {
  eyebrow: "上海交通大学 · 电力系统安全分析课程组",
  dedication: "献礼上海交通大学建校 130 周年",
  title: "全球大停电事故档案库",
  slogan: "铭记黑暗，守护光明",
  sloganEn: "Light fades. Memory endures.",
};

export const empathyStats = [
  { label: "收录事故", value: "13", unit: "起" },
  { label: "覆盖时间", value: "1965-2025", unit: "60 年" },
  { label: "最高影响人口", value: "6.7 亿", unit: "印度大停电" },
];

const detailOverrides: Partial<Record<string, Partial<ArchiveDetail>>> = {
  "2003-us-canada": {
    lead:
      "2003 年美加大停电是现代级联故障研究中最具代表性的样本之一。局部隐患、态势感知缺失和跨区域协同不足共同推动了事故的放大。",
    lesson:
      "真正需要复盘的，不只是初始故障本身，而是系统为什么没有在最早阶段把故障关住。",
  },
  "2012-india": {
    lead:
      "2012 年印度大停电影响人口规模创纪录，它集中暴露了超大系统中调度纪律、跨区约束和治理执行之间的长期失衡。",
    lesson:
      "当调度边界长期被透支时，大停电往往不是偶然，而是被延后了很久的必然。",
  },
  "2015-ukraine": {
    lead:
      "乌克兰事件改变了行业对电网安全边界的理解。它提醒我们，网络安全问题一旦落到控制系统上，就会直接转化为供电安全问题。",
    lesson:
      "数字化程度越高，越需要把网络隔离、权限治理和人工恢复能力放在同等重要的位置。",
  },
  "2025-iberia": {
    lesson:
      "对仍在调查中的重大事故，正式站点需要支持版本更新、材料补充和已核实/待核实信息的并列展示。",
  },
};

function eventCode(event: PrototypeEvent, index: number) {
  return `CASE-${event.year}-${String(index + 1).padStart(3, "0")}`;
}

function actTitle(actNumber: number) {
  return acts.find((item) => item.act === actNumber)?.title ?? "档案条目";
}

function buildArchiveDetail(event: PrototypeEvent, index: number): ArchiveDetail {
  const override = detailOverrides[event.id] ?? {};
  const baseLead =
    `${event.dateLabel}，${event.title}在${event.location}发生，${event.hook}。` +
    ` 这一条目当前作为视觉原型下的档案示例，后续可替换为完整 Markdown 正文。`;

  return {
    eventId: event.id,
    code: eventCode(event, index),
    date: event.dateLabel,
    title: event.title,
    region: event.location,
    impact: event.affectedLabel,
    trigger: event.cause,
    lesson:
      override.lesson ??
      `这一案例位于“${actTitle(event.act)}”篇章中，后续适合继续补齐事故时序、结构性问题与事后改革材料。`,
    lead: override.lead ?? baseLead,
    sections:
      override.sections ?? [
        {
          heading: "事件概述",
          body:
            `${event.title}发生于 ${event.dateLabel}，影响范围覆盖 ${event.location}。` +
            ` 原型版先保留“${event.hook}”这一记忆点，正式版可继续扩展为完整事故叙述。`,
        },
        {
          heading: "触发与放大",
          body:
            `当前已抽出的核心线索是“${event.cause}”。后续迁入 Markdown 后，可将它拆成直接原因、深层原因和系统约束三个层次。`,
        },
        {
          heading: "页面接入建议",
          body:
            "这一条目适合同时服务于首页地图点位、时间轴卡片和独立案例页。后续可接入视频、图表、参考资料与版本更新时间。",
        },
      ],
    docs: [
      "建议补充官方调查报告、权威机构通报和学术论文。",
      "建议准备一张事故时间线图和一张系统结构示意图。",
      "建议为正式案例页预留视频、图表和参考资料模块。",
    ],
    videoTitle: `${event.title} · 原型视频位`,
    videoUrl: "",
    videoNote:
      "这里当前只保留视频占位。后续可将 NotebookLM 讲解视频或正式嵌入链接接入 Astro 页面。",
  };
}

export const archiveDetails: ArchiveDetail[] = events.map(buildArchiveDetail);

export function eventsByAct(act: number) {
  return events.filter((event) => event.act === act);
}

export function projectPoint([lng, lat]: [number, number]) {
  return {
    x: ((lng + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500,
  };
}
