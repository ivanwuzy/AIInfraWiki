# SK hynix（SK hynix Inc.）横纵分析报告

> 研究截止：2026-08-11 ｜研究对象：上市存储器制造商 ｜主体：SK hynix Inc.（韩国交易所上市，代码 000660）｜核心问题：它是否是人形机器人训练/推理与自研芯片路线中值得锁定的 HBM 供应与协同对象？

## 结论先行

**SK hynix 不是可按通常一级市场逻辑投资或并购的标的，而是 AI 加速器供应链里必须被管理的关键上游约束。**它的护城河不只是一颗 DRAM die 的制程，而是约 2009 年启动、2013 年推出首代 HBM 后，围绕 TSV 叠层、薄化、热管理、良率爬坡、客户认证和先进封装协同逐代积累的制造系统。[S1][S7] 2024 年 HBM 已占其第四季度 DRAM 收入逾 40%，2025 年公司称 HBM 收入同比翻倍以上；这说明高带宽内存已从展示性技术变成经营利润的承重产品，但不代表其将 HBM 收入、单一客户份额、合同价格或剩余可供货量对外披露。[S2][S3]

对一家人形机器人公司，正确动作不是试图“投资获得 HBM”，而是把 SK hynix 纳入**训练集群和未来自研加速器的二级供应保障设计**：

| 决策 | 建议 | 依据与门槛 |
|---|---|---|
| 采购/合作 | **推进，优先通过 GPU/XPU 模组、服务器 OEM/ODM 的合格料号体系建立多源可替代方案。** | HBM 是 GPU/XPU 封装 BOM，通常不能像通用 DIMM 那样由终端客户单独下单。需求预测、认证、封装产能和加速器厂商分配须联动；拿到指定 SKU、交付窗口、封装厂、变更控制与失效赔付条款前，不把“合作”视为保供。 |
| 战略合作 | **条件性推进。** | 若公司有 2028 年前自研训练/推理 ASIC 计划，应在 RTL/封装冻结前 18–24 个月，拿工作负载的带宽、容量、功耗、热流和 base-die 接口需求，尝试进入其 customer co-design / Custom HBM 评审；这不是现成可买产品或产能承诺。[S11][S15] |
| 投资/并购 | **不建议作为财务或控制型交易。** | 该主体为大型上市公司、资本开支密集且处于 SK 集团生态；少数股权难换取配额，控制型并购不具可行性。可关注封装测试、HBM 热管理、内存验证软件和本土备援环节的可投机会，而非将 SK hynix 当作被投标的。 |
| 自研芯片 | **可把其列为外部 memory partner，不把 HBM 自制列为近期能力。** | HBM4 已使 base die、逻辑工艺和 CoWoS 等异构封装耦合更深；SK hynix 与 TSMC 的 HBM4 MOU 正是此信号。[S9] 自研 XPU 的第一道 P0 不是标称 TFLOPS，而是可获得、可认证的 HBM 代际/容量/封装窗口。 |

以下“量产”“供货”和“认证”严格区分：SK hynix 在 2024-09 宣布 12-layer HBM3E **开始量产、计划年内供货**；2025-09 宣布 HBM4 **完成开发并准备量产**；2026-06 的 HBM4E 则只是向主要客户**送样**。后两项绝不能折算成对任意客户的确定订单或可用产能。[S4][S5][S6]

## 一、对象边界、研究口径与证据等级

SK hynix 的主业是 DRAM 与 NAND flash；报告聚焦其对 AI 训练、推理、机器人数据处理和自研芯片有直接约束的 HBM、服务器 DRAM、先进封装与企业级 SSD，不把集团其他业务、新闻稿中的“AI memory creator”愿景或 PIM 展示当作同等成熟的商业线。[S3][S15]

- **A：可核验的一手公告/财报**，可支持产品阶段、投资金额、已披露收入和已点名合作。
- **B：一手访谈、展会或管理层阐释**，用于理解路线，不能单独证明订单、份额或产能。
- **C：研究推断**，明确列出条件；不伪装为公司事实。

本报告没有找到一份能同时按客户、代际、价格和剩余产能拆分 HBM 的公开审计表，因此所有供应安全判断均保持为情景判断。研究也没有把 NVIDIA 的历史供货、TSMC 的研发 MOU、Purdue 的研发合作，扩写成排他关系或订单承诺。

## 二、纵向分析：一家周期型 DRAM 厂怎样变成 AI 的瓶颈供给方

### 1. 1983–2008：规模制造的底座先于 AI 出现

公司资料称其于 1983 年进入半导体业务。[S7] 这段历史对今天的意义不是品牌年限，而是让它在通用 DRAM/NAND 的价格周期中积累了晶圆制造、良率、质量与全球客户认证能力。HBM 后来并没有改变“存储是制造业”的本质，只是把价值从单片 bit 成本，转到能否在更高热、更薄 die、更复杂封装条件下稳定交付。

公开材料将其 HBM 起点回溯到 2009 年：团队看到 TSV 与 wafer-level packaging（WLP）可能越过传统内存性能边界，随后在 2013 年发布首代 HBM。[S7] 当时 HPC 需求尚不足，首代 HBM 并未马上成为主流；这种“提前十余年做难而小的工艺平台”的选择，后来在生成式 AI 把 GPU 内存带宽推成瓶颈时形成先发优势。

### 2. 2009–2021：把 TSV 叠层从技术项目变成可复制制造

HBM 的难处在于它不是单纯提高 DRAM I/O。多层 DRAM 要经 TSV 垂直互连、薄化、堆叠并连接至 base die；层数上升会同步放大翘曲、散热、颗粒厚度、良率和封装吞吐风险。2020 年的 HBM2E 已进入全规模量产：8 颗 16Gb die 叠成 16GB，1,024 I/O、每 pin 3.6Gbps，带宽超过 460GB/s。[S8] 这为其后的 AI 产品不是“从样品到量产”的断层，而是已有工艺平台的继续爬坡。

2021-10，SK hynix 宣布 HBM3 开发完成：16GB/24GB 两种容量，24GB 版本以 TSV 堆叠 12 颗薄至约 30μm 的 die；公司称带 on-die ECC、最高 819GB/s。[S12] 2022-06，公司进一步披露 NVIDIA 完成 HBM3 样品性能评价，并将向预计第三季度出货的 NVIDIA 系统供货。这是本报告能确认的、带具体终端平台（H100）的历史客户供货节点，不是以媒体推测替代客户认证。[S10]

同一时期，SK hynix 没有把自己收缩为 HBM 单品厂商。2020 年签约、2021 年完成第一阶段的 Intel NAND/SSD 业务收购，总对价为 **90 亿美元**，第一阶段支付 70 亿美元，并以美国子公司 Solidigm 承接 SSD 业务和大连 NAND 工厂资产。[S13][S14] 这笔并购的战略意义是补足企业 SSD/QLC 与数据中心客户能力，弱化仅依赖 DRAM 周期的结构；但它不是 HBM 供应能力的证据，也不能把 Solidigm 销售额并入 HBM。

### 3. 2022–2023：PIM 探索与存储下行，反而检验了商业纪律

2022 年公司发布 GDDR6-AiM（Accelerator-in-Memory）样品，称会与从 SK Telecom 分拆出的 SAPEON 探索与 AI 芯片组合；公告的“某些计算 16 倍更快、功耗降低 80%”属于其特定方案主张，并非通用 GPU/大模型基准，也没有披露规模化客户收入。[S16] 这条路线说明公司希望从“供带宽”延伸到“减少数据搬运”，但截至研究日，公开证据更像研发/生态探索，而不是 HBM 之外第二条已被财务验证的 AI 芯片业务。

存储周期在 2023 年给出了反面教材：全年收入为 32.7657 万亿韩元、营业亏损 7.7303 万亿韩元。[S17] 因而不能把 HBM 的技术领先理解成周期免疫。真正的战略转折是公司在低谷仍把 premium DRAM、HBM3 和后续 HBM3E 的认证与产能放在优先位置，而不是以短期利用率压缩所有研发。

### 4. 2023–2025：从“客户在评样”到收入结构改变

2023-08 的 HBM3E 公告仍处于样品由客户评估、计划于 2024 年上半年量产的阶段；即使 NVIDIA 高管在公告中表达继续合作的期待，也不等同于 HBM3E 已获得确定采购量。[S18] 这正是存储供应链中常被混淆的三步：**送样/平台验证 → 认证 → 量产与按排产交付**。

2024 年跨过了这个门槛。公司称 3 月开始向领先全球科技企业供 8-layer HBM3E；9 月开始量产 36GB、12-layer HBM3E，并称此前 8-layer HBM3E 已在 3 月首次交付客户，12-layer 产品计划年内供货。[S4][S7] 这次升级的制造信号比“更高带宽”更关键：在与 8-layer 同等总厚度下将 DRAM die 薄化 40%、容量提升 50%，并用 Advanced MR-MUF 改善翘曲控制与散热。[S4]

财务也显示出产品结构变化，但仍须避免过度外推。2024 年收入 66.1930 万亿韩元、营业利润 23.4673 万亿韩元；公司披露第四季度 HBM 占 DRAM 收入逾 40%，并没有披露 HBM 的绝对销售额、毛利率、客户或合约价格。[S2] 2025 年收入升至 97.1467 万亿韩元、营业利润 47.2063 万亿韩元，管理层称 HBM 收入同比翻倍以上，并把增长同时归因于 HBM 与服务器常规内存需求。[S3] 因此，“AI 拉动盈利”成立；“所有利润都来自 NVIDIA/HBM4”则没有披露支持。

### 5. 2024–2026：HBM4 把竞争从 memory die 推向逻辑 die、封装和协同设计

2024-04，SK hynix 与 TSMC 签署 HBM4 与下一代封装合作 MOU：计划在 HBM4 base die 采用 TSMC 先进逻辑制程，并优化与 CoWoS 的集成。[S9] 这使竞争发生了质变。以往 HBM 主要由 DRAM 厂的堆叠能力决定；HBM4 的 base die 更复杂后，记忆体厂、逻辑代工、封装和 AI 芯片设计方的接口、功耗与热设计必须更早锁定。

公司于 2025-09 宣布 HBM4 开发完成、完成量产准备，称 2,048 I/O、速度逾 10Gbps，并以 Advanced MR-MUF 和 1bnm DRAM 制程降低量产风险。[S5] 这是一手产品状态，可信地支持“具备量产准备”；它**不支持**任何客户已完成认证、可获得多少 wafer 或实际良率的判断。2026-01 财务公告称 HBM4 已在大规模生产以满足客户请求、同时供应 HBM3E 与 HBM4；鉴于该表述为公司自述且无客户/数量拆分，本报告将其记为“已商业化供货的公司口径”，不转写为客户订单。[S3]

2026-06，公司只称将 12-layer、48GB HBM4E 样品送至主要客户，产品最高 16Gbps/pin；量产仍须与伙伴协作、按时推进。[S6] HBM4E 因而是下一轮选择权，而非现期可纳入采购预算的供给。

## 三、产品、商业化与供应安全：要看什么，不能从什么推什么

| 层级 | 可确认事实 | 商业/供应含义 | 不应推导的结论 |
|---|---|---|---|
| HBM3 | 2022 年已量产；NVIDIA 完成样品评价，面向预计 Q3 出货的 H100 系统供货。[S10] | 是历史上最清晰的“认证后交付”例子。 | 不能由此断言后续每代 HBM 均被 NVIDIA 独家采用。 |
| HBM3E | 2024 年 8-layer 已对客户交付；12-layer 36GB 已量产、计划年内供货。[S4] | 证明 12-high 薄化、散热与产线能力进入量产叙事。 | “量产”不是所有客户/所有封装平台均已认证。 |
| HBM4 | 2025 年宣布开发完成、量产准备完成；2026 年财报称大规模生产中。[S3][S5] | 可列为自研 ASIC 中期路线的候选 memory generation。 | 没有客户、价格、可分配产能与良率披露，不能当保供。 |
| HBM4E | 2026 年已送样主要客户。[S6] | 可跟踪的远期路线。 | 不列入当前 BOM 或交期承诺。 |
| AiM/PIM | 2022 年 GDDR6-AiM 样品、与 SAPEON 计划合作。[S16] | 适合关注 memory-bound 推荐、KV cache 等研究性 workload。 | 不归为可采购的通用训练/推理加速器，也不把它列为 1.10 主业。 |
| AI-NAND/eSSD | Intel NAND/SSD 资产与 Solidigm 带来企业 SSD 能力；公司在 2025 年财报中提及 AI 数据中心 eSSD/QLC。[S3][S13] | 对机器人数据湖、日志、检索和训练数据冷/温层有价值。 | 不与 HBM 的带宽、封装或客户份额混为同一市场。 |

**合同与认证的实务判断。**对机器人公司而言，若采购的是 NVIDIA/AMD 等加速器服务器，HBM 料号往往已被 GPU 封装和整机供应链指定；可谈判的是整机/模块的交期、替代配置、备库和 EOL/变更通知，而非跳过上游认证直接在现货市场锁“HBM 容量”。若未来自研 XPU，则应向 memory partner 交付包含下列项目的完整 package：目标容量与每 pin 速率、HBM stack 数、thermal map、interposer/CoWoS 兼容、ECC/RAS、功耗 transient、bring-up 验证计划、年度 ramp 曲线与出口合规预案。任何仅写“HBM4 合作意向”的备忘录都不足以替代这些条件。

## 四、融资/资本史与组织边界

SK hynix 是成熟上市公司，不适用“天使—A/B/C 轮—估值”的创投融资叙事。公开可验证的资本事件应当与公司融资、并购和产能投资分开；下表没有把经营现金流、政府激励或传闻订单伪造成融资。

| 时间 | 资本/组织事件 | 金额或状态 | 对研究判断的意义 | 证据 |
|---|---|---|---|---|
| 1983 | 进入半导体业务 | — | 长期 DRAM/NAND 制造底座；不是 AI 初创公司。 | [S7] A |
| 2012 | 纳入 SK 体系满十年（2022 年公司回顾） | 未在本轮一手材料中核到直接持股比例 | 可确认集团关联，直接/穿透持股和表决权应以最新年报复核。 | [S19] B |
| 2020-10 | 签约收购 Intel NAND/SSD 业务 | 总对价 **90 亿美元** | 资产并购，补企业 SSD/QLC，不是 HBM 融资。 | [S14] A |
| 2021-12 | 第一阶段交割并设立 Solidigm | 已支付 **70 亿美元**；余 20 亿美元原计划最终交割时支付 | 加强 AI 数据中心存储，但与 HBM 生产能力不可互换。 | [S13] A |
| 2024-04 | Indiana 先进封装与研发厂投资协议 | 预计 **38.7 亿美元**，公司当时计划 2028 年下半年量产 | 产能建设计划，非已实现供给；同时形成 Purdue 研发关系。 | [S20] A |
| 2025 财年 | 股东回报 | 公司披露合计股息 2.1 万亿韩元、拟注销库存股 | 体现现金创造与资本政策，不构成新融资。 | [S3] A |

**待人工复核的资本事项：**（1）SK Square/其他关联实体的最新直接持股、质押和董事会控制权；（2）Intel NAND 收购第二阶段的最终交割、支付和 IP/人员转移状态；（3）Indiana 项目的实际开工、补贴、预算与量产时间。它们会影响供应韧性和集团治理判断，但当前不宜用新闻稿推定完成。

## 五、合作网络：按关系性质拆开

### 投资方/股东与控制关系

| 对象 | 已证实关系 | 边界 |
|---|---|---|
| SK 集团、SK Telecom、SK Square | 公司 2022 年披露三方组建 SK ICT Alliance；公司资料也以 SK 体系十周年回顾其集团身份。[S19] | 本轮未取得最新审计年报的持股比例表，不在报告写入未经复核的直接持股比例。联盟不等于订单或独占供应。 |
| 公开市场股东 | 韩国交易所上市。 | 不是融资轮投资人清单；需以定期报告确认前十大股东与锁定/质押。 |

### 客户/订单、验证与实际交付

| 对象 | 可确认层级 | 能说明什么 | 不能说明什么 |
|---|---|---|---|
| NVIDIA | 2022 年：NVIDIA 完成 HBM3 样品性能评价，SK hynix 将面向预计 Q3 出货的 H100 系统供货。[S10] | 有明确历史认证与交付节点。 | 未披露合约金额、排他性、后续各代份额或未来最低采购量。 |
| “领先全球科技企业/主要客户” | 2024 年 HBM3E 8-layer 交付、12-layer 计划年内供应；2026 年 HBM4E 送样主要客户。[S4][S6] | 证明客户导入/送样活动存在。 | 客户未点名，不能自动填为 NVIDIA、云厂商或机器人客户。 |
| HPE、Dell、Intel 等展会/验证对象 | 公司参加相关行业活动并披露部分产品验证。 | 可视为生态接触和平台兼容线索。 | 展会展示、兼容验证不等于采购订单。 |

### 产业合作、供应链与并购整合

| 对象 | 关系 | 证据与边界 |
|---|---|---|
| Intel / Solidigm | 收购 Intel NAND/SSD 业务第一阶段完成，Solidigm 成为美国子公司。 | [S13]；属于资产、人员与产品组合整合，不是 HBM 客户。 |
| TSMC | HBM4 base die、先进逻辑制程和 CoWoS 集成合作 MOU。 | [S9]；是技术/供应链协同，MOU 不披露采购金额、优先级或保留产能。 |
| Indiana 州及当地政府 | 先进封装设施投资协议。 | [S20]；厂房计划不能视为现有 HBM 美国产能。 |

### 技术/联合研发

| 对象 | 关系 | 边界 |
|---|---|---|
| NVIDIA | 2026 年多年度技术合作、面向 AI factory 的下一代 memory 开发（公司后续综述提及）。[S15] | 研发合作不等于订单；对具体 HBM4/4E 料号、产能与价格未披露。 |
| SAPEON | 2022 年计划把 GDDR6-AiM 与其 AI 芯片组合。 | [S16]；为 PIM 探索，未发现量产 SKU/客户收入披露。 |
| TSMC | HBM4 base die 与 CoWoS 集成协同。 | [S9]；应在实际 XPU 项目中另行验证封装责任、NRE、良率及 IP。 |

### 高校/科研渊源

| 对象 | 已披露关系 | 判断 |
|---|---|---|
| Purdue University | Indiana 项目含 HBM 先进封装研发协作与人才管道。[S20] | 是明确的产学研与当地人才关系；不是 Purdue 向公司转让 HBM 核心 IP 的证据。 |
| 其他高校/实验室 | 本轮未找到能支持创始技术源自某一高校授权的证据。 | 不因新闻报道中出现会议或人才培养就建立“高校谱系”关系。 |

## 六、横向分析：三大 HBM 供给者并非同质替代

HBM 的横向竞争应按“某一代 HBM 能否在某一 XPU + 封装平台按期认证量产”比较，而不是按 DRAM 总营收、宣传带宽或单次送样排名。Samsung Electronics、Micron Technology 与 SK hynix 是需要持续跟踪的三类主流替代来源；TSMC 是 HBM4 时代不可忽略的关键协同者而非 HBM 供应商。

| 维度 | SK hynix | Samsung Electronics | Micron Technology | 对机器人公司意味着什么 |
|---|---|---|---|---|
| 主攻路线 | HBM + DRAM + NAND/eSSD；强调 Advanced MR-MUF、薄 die 堆叠与 customer co-design。[S4][S15] | DRAM/HBM 与逻辑代工/封装集团能力并存。 | DRAM/HBM 与北美供应链、先进封装协同。 | 三家都可能进入合格供应链，但“可替换”必须按 GPU/XPU 认证、代际、封装及交期逐项验证。 |
| 已披露 SK hynix 量产证据 | HBM3 对 H100 的供货；2024 HBM3E 量产/交付；2025 HBM4 准备量产并在 2026 财报称量产中。[S3][S4][S10] | 本报告未用其路线图替代实际认证证据。 | 同左。 | 采购尽调应向系统供应商索取同一平台的 approved-vendor list，而非只看各厂官网新闻。 |
| HBM4 关键差异 | 与 TSMC 协作逻辑 base die 和 CoWoS；将定制化推至产品定义早期。[S9] | 具备集团内逻辑/封装协同的潜在优势，但需按具体项目核验。 | 以自身 DRAM 及客户协同参与；同样需核验。 | 对自研 ASIC，base die 与封装接口是供应商选择的一部分。 |
| 主要风险 | AI 需求集中、产能/良率与客户分配不透明、制造地域集中、存储周期反转。 | 认证节奏、产品良率与客户平台导入需逐代验证。 | 客户导入节奏、产能爬坡与成本竞争需逐代验证。 | 保供策略不能是“押一家冠军”，而是平台级双供、代际回退和整机交付的组合。 |

SK hynix 的横向位置可以概括为：**早期 HBM 研发和 HBM3/HBM3E 连续量产，把技术领先转化成客户认证与利润结构；HBM4 又主动把自己嵌入 TSMC/客户的封装协同。**短板同样来自这种位置：它越接近头部 XPU 的设计窗，资源分配越不可能只由一个中小终端客户的采购意愿决定；对机器人公司，技术伙伴关系的价值与供应议价能力不能混为一谈。

## 七、横纵交汇洞察与情景推演

### 历史如何塑造今天的位置

2009 年开始押注 TSV/WLP、在首代 HBM 需求尚小的时期持续迭代，是今天能够从 HBM2E 的 MR-MUF 走到 HBM3E 薄化/12-high，再走到 HBM4 logic base die 协同的因果链。[S7][S8][S9] 这也是为什么单看“HBM4 速度”会错过真正壁垒：竞争者可做出样品，难的是在客户封装平台、功耗边界和质量验证中，连续按节奏交付。

另一方面，2023 年大额亏损提醒投资团队，HBM 是提高组合质量而不是消灭存储周期。[S17] 2024–2025 的高利润同时受 HBM、服务器 DRAM、eSSD 和行业供需改善影响。任何以 2025 利润率永久化估值，或把总公司收入直接换算为 HBM 份额的模型，都应被否决。

### 三个剧本

| 剧本 | 触发条件 | 对 SK hynix | 对机器人公司的动作 |
|---|---|---|---|
| 最可能：AI 内存成为多代紧平衡供给 | HBM3E/4 按主要 XPU 路线放量，验证与封装仍是瓶颈 | 保持高价值产品占比，但客户/代际分配决定份额。 | 锁系统级预测与双源认证；将 HBM4/4E 纳入路线而非现货预算。 |
| 最危险：需求或平台切换叠加供给扩张 | 头部客户调整架构、HBM 产能快速释放、传统 DRAM 下行 | 高资本开支与存储周期同步放大盈利波动。 | 不签无弹性长单；以平台兼容、call-off、库存上限及代际降级条款保护现金。 |
| 最乐观：custom HBM 与先进封装成为长期协同入口 | 自研 ASIC 高带宽、能耗、热设计与客户特定 workload 强耦合 | 从标准料号供应商升至系统共同设计者。 | 若自研加速器 workload 与年化需求足够明确，尽早建立 NDA/co-design；用 PPA、package yield、NRE、供货优先级而非营销语验收。 |

## 八、面向人形机器人的行动清单

1. **0–90 天：建立真实 BOM。**将训练集群、仿真、VLA 训练、云端推理、端侧 robot SoC 分成五类；逐类列出 GPU/XPU、HBM 代际/stack 数、服务器 OEM、封装平台、交付日期和唯一供应点。对已采购 GPU，以整机合同而不是 HBM spot price 判断风险。
2. **3–12 个月：认证而非口头保供。**要求服务器/OEM 给出 approved memory vendor、可替代 SKU、代际切换、RMA/质量追溯、出货承诺与因上游换料导致的性能差异。把 Samsung、Micron 作为平台级备选验证，不能只停留在供应商名单。
3. **自研芯片立项门槛。**若目标是训练 XPU，先证明带宽/容量需求、封装面积、TDP、CoWoS/interposer 取得、HBM 认证时程和年化量均可闭环；若只是机器人端侧控制/感知 SoC，通常 LPDDR/GDDR 与功耗、成本、功能安全更相关，强行上 HBM 会使热、封装、供给和 NRE 同时恶化。
4. **投资地图转向相邻可控层。**关注 HBM 热管理/测试、先进封装设计服务、memory RAS/验证、CXL/内存分层软件以及合规的本土化供应保障；不得以投资 SK hynix 相关生态为由暗示可获得其 HBM 配额。

## 九、冲突与未确认事项

| 事项 | 当前证据 | 冲突/缺口 | 对结论的处理与下一步 |
|---|---|---|---|
| HBM4 实际量产/客户认证 | 2025-09 为“开发完成、量产准备”；2026-01 财报称大规模生产中。[S3][S5] | 无客户名、合格平台、良率、量或价格。 | 视为公司已披露商业化进展，不视为特定客户保供；索取系统侧 AVL 和供货证明。 |
| HBM4E 状态 | 2026-06 为主要客户送样。[S6] | 无量产日期、认证和订单。 | 仅作远期技术雷达。 |
| HBM 市场份额 | 公司新闻曾称约 50% 或“no.1”。[S7] | 无同口径、独立、最新的出货/营收份额审计。 | 不在投资模型使用单一份额数字；按代际和客户平台采购数据复核。 |
| 客户集中度与合约价格 | NVIDIA HBM3 历史交付有一手披露。[S10] | HBM3E/4 的客户、长期采购量、价格和最低承诺未公开。 | 不把客户新闻、展会或 MOU 计作订单；尽调需询问收入集中度和 take-or-pay。 |
| 产能扩张 | Indiana 项目为 38.7 亿美元、当时目标 2028 H2 量产。[S20] | 项目执行、预算、补贴和实际产能未由本轮独立核验。 | 在供应模型中按“计划”而非可用产能处理。 |
| PIM/AiM 商业化 | GDDR6-AiM 为样品并计划与 SAPEON 协作。[S16] | 无公开 SKU、通用软件栈、客户量产收入。 | 不列作采购或分类的正式次主业。 |

## 十、证据/来源审计表

| 编号 | 原始来源 | 日期 | 支撑的承重事实 | 等级 |
|---|---|---|---|---|
| S1 | [SK hynix 41st anniversary history](https://news.skhynix.com/en/sk-hynix-41st-anniversary-rise-to-ai-memory-leader/) | 2024-10-10 | 1983 起源、2009 HBM 研发、2013 首代、MR-MUF、2024 HBM3E 交付背景 | A/B |
| S2 | [FY2024 financial results](https://news.skhynix.com/en/sk-hynix-announces-4q24-financial-results/) | 2025-01-22 | FY24 财务、Q4 HBM 占 DRAM 收入逾 40% | A |
| S3 | [FY2025 financial results](https://news.skhynix.com/en/sk-hynix-announces-fy25-financial-results/) | 2026-01-28 | FY25 财务、HBM 收入同比翻倍以上、公司称 HBM4 已大规模生产 | A |
| S4 | [12-layer HBM3E volume production](https://news.skhynix.com/en/sk-hynix-begins-volume-production-of-the-world-first-12-layer-hbm3e/) | 2024-09-26 | 12-layer 36GB HBM3E 量产、8-layer 已交付、薄化/散热 | A |
| S5 | [HBM4 development complete](https://news.skhynix.com/en/sk-hynix-completes-worlds-first-hbm4-development-and-readies-mass-production/) | 2025-09-12 | HBM4 开发/量产准备、2,048 I/O、逾 10Gbps、1bnm/MR-MUF | A |
| S6 | [HBM4E samples shipped](https://news.skhynix.com/en/sk-hynix-ships-samples-of-12-layer-next-gen-hbm4e-2/) | 2026-06-18 | HBM4E 12-layer 样品、主要客户、非量产状态 | A |
| S7 | 同 S1 | 2024-10-10 | 历史与 HBM 代际路线 | A/B |
| S8 | [HBM2E mass production](https://news.skhynix.com/en/sk-hynix-starts-mass-production-of-high-speed-dram-hbm2e/) | 2020-07-02 | HBM2E 全规模量产、460GB/s、TSV | A |
| S9 | [TSMC HBM4 partnership](https://news.skhynix.com/en/sk-hynix-partners-with-tsmc-to-strengthen-hbm-technological-leadership/) | 2024-04-19 | HBM4 base die/CoWoS 合作 MOU | A |
| S10 | [HBM3 supply to NVIDIA](https://news.skhynix.com/en/sk-hynix-to-supply-industrys-first-hbm3-dram-to-nvidia/) | 2022-06-08 | NVIDIA HBM3 评价和 H100 系统交付安排 | A |
| S11 | [Full-stack AI memory strategy](https://news.skhynix.com/en/hbm-to-essd/) | 2026-07-08 | customer co-design、Custom HBM、AI-DRAM/NAND 方向 | B |
| S12 | [HBM3 development](https://news.skhynix.com/en/sk-hynix-announces-development-of-hbm3-dram/) | 2021-10-20 | HBM3 规格、TSV、on-die ECC | A |
| S13 | [Intel NAND first close](https://news.skhynix.com/en/sk-hynix-completes-the-first-phase-of-intel-nand-and-ssd-business-acquisition/) | 2021-12-30 | Solidigm、70 亿美元第一阶段交割 | A |
| S14 | [Intel NAND acquisition agreement](https://news.skhynix.com/en/sk-hynix-to-acquire-intel-nand-memory-business/) | 2020-10-20 | 90 亿美元交易结构 | A |
| S15 | 同 S11 | 2026-07-08 | NVIDIA 多年度技术合作的后续公司叙述 | B |
| S16 | [GDDR6-AiM/PIM sample](https://news.skhynix.com/en/sk-hynix-develops-pim-next-generation-ai-accelerator/) | 2022-02-16 | PIM 样品与 SAPEON 探索，性能口径边界 | A |
| S17 | [FY2023 financial results](https://news.skhynix.com/en/sk-hynix-reports-fourth-quarter-2023-financial-results/) | 2024-01-24 | FY23 收入和营业亏损 | A |
| S18 | [HBM3E samples for customer evaluation](https://news.skhynix.com/en/sk-hynix-develops-worlds-best-performing-hbm3e/) | 2023-08-21 | 样品、客户评价与计划量产的边界 | A |
| S19 | [SK ICT Alliance](https://news.skhynix.com/en/sk-telecom-sk-square-and-sk-hynix-launch-sk-ict-alliance-for-synergies/) | 2022-01-08 | SKT/SK Square/SK hynix 集团协同关系 | A |
| S20 | [Indiana advanced packaging investment](https://news.skhynix.com/en/sk-hynix-signs-investment-agreement-of-advanced-chip-packaging-with-indiana/) | 2024-04-03 | 38.7 亿美元、Purdue 研发、2028 H2 计划 | A |

## 十一、产业链分类复核

**主二级分类：`1.7 HBM`。**SK hynix 的核心技术优势、AI 时代的增量价值创造和对训练/推理系统的稀缺约束，集中在 HBM 的 TSV 堆叠、Advanced MR-MUF、薄 die、热管理、量产良率与客户认证。HBM3/HBM3E 的实际交付、HBM4 的量产准备和财务中 HBM 占 DRAM 的高贡献，均支持以 HBM 而非泛 DRAM 或 NAND 作为主分类。[S2][S3][S4][S5]

**不设正式次分类。**

- **不列 `1.10 存算一体/近存计算芯片`：**GDDR6-AiM/PIM 有样品与联合探索，但公开资料没有证明其为量产收入、开放软件生态或公司当前价值创造中心。[S16]
- **不列 `3.2 数据中心散热`：**MR-MUF/iHBM 是 HBM 产品的热可靠性能力，不是向数据中心销售的独立散热系统。
- **不列 `2.1 加速计算平台`：**公司不提供 CUDA-like 编程平台；“full-stack”是 memory portfolio 与协同设计叙述，不能误归为计算软件平台。
- **不列 `3.1 光通信`、`1.5/1.6 互联`：**HBM 与 GPU/XPU 的封装内接口、CoWoS 集成很关键，但不是该公司对外销售的 scale-up/scale-out 网络产品。

