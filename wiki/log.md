# Wiki Log

## [2026-08-14] synthesis | 训练芯片孵化证据与人才方向
- Disposition: New
- 创建 wiki/synthesis/训练芯片孵化证据与人才方向.md，系统分析训练芯片孵化方向、人才来源，建议以"物理 AI 训练系统与软硬件协同平台"定位先行。

## [2026-08-14] research | VLA/WAM 训练负载与芯片瓶颈分析
- Disposition: New
- 创建 raw/sources/2024-10-31-pi0-vla-flow-model.md 和 raw/sources/2025-01-07-nvidia-cosmos-world-model.md 作为原始资料。
- 重写 wiki/segments/6.5-视觉语言动作模型.md 和 wiki/segments/6.6-动作世界模型.md，填充基于 pi0 和 Cosmos 的训练负载特征分析。
- 创建 wiki/technologies/VLA-WAM训练负载与芯片瓶颈分析.md，首次系统分析 VLA/WAM 训练的核心瓶颈（长序列注意力 O(n²)、HBM 带宽、视频编解码、大规模并行效率），给出对训练芯片孵化的具体优化方向建议，并与训练芯片孵化证据与人才方向.md 的结论衔接。
- 基于知识库已验收的 200+ 公司档案、融资排名、产品矩阵和产业链分类，从人形机器人公司视角分析五大并购方向。
- 按优先级排序 8 个并购标的（Rerun、Foxglove、清程极智、Parallel Domain、清昴科技、地瓜机器人、趋境科技、澎峰科技）和 3 个战略投资候选（摩尔线程、壁仞科技、沐曦）。
- 生成时间明确标注为 2026-08-13，所有 P0 尽调缺口均引用 wiki/questions/ 对应页面。

## [2026-08-14] synthesis | 训练芯片孵化方向与人才布局分析
- Disposition: New
- 创建 wiki/synthesis/训练芯片孵化方向与人才布局分析.md。
- 基于 local_research/训练芯片孵化专题研究/ 提出的孵化 thesis，系统性地从知识库产业链证据、人才来源谱系、产品矩阵和融资排名中寻找支撑证据。
- 主要内容：验证"软件栈→异构调度→芯片定义"三步走路径的知识库支撑；发现六大产业链证据（智谱路径验证、国产芯片 2.1 平台均缺机器人负载验证、软件层标的成本可控、人才来源母体清晰、智谱 Infra 版图可参考、硬件门槛极高）；给出六大孵化方向排序及人才吸引策略；按优先级列出并购/招安/合作候选；识别风险和未确认事项。
- 更新 wiki/index.md 的 synthesis 索引表。

## [2026-08-14] synthesis | 物理AI训练负载产业链认知与行动
- Disposition: New
- 创建 wiki/synthesis/物理AI训练负载产业链认知与行动.md。
- 基于联网搜索，系统梳理芯片、AI Infra、模型和学术研究领域对物理AI（Physical AI）训练负载的认知和行动。
- 关键发现：NVIDIA 已建立物理AI训练的"三计算机"闭环垄断（DGX+Isaac+Jetson）；国内所有芯片公司均未针对物理AI训练负载做专项优化，这是明确空白；物理AI训练负载与传统LLM训练存在五大根本性差异；Tesla Dojo 的激进架构设计是重要参考。
- 给出六大空白领域、三个定位选项和架构启示。
- Raw: raw/sources/physical-ai-training-workload-landscape.md
- 更新 wiki/index.md 的 synthesis 索引表。

## [2026-08-14] research | 方向A/B/C创业公司全景扫描
- Disposition: New
- 创建三个方向创业公司全景扫描文件：
  - wiki/synthesis/方向A-具身训练负载与系统共设计平台-创业公司全景.md（22家公司）
  - wiki/synthesis/方向B-具身AI编译器算子库与多XPU运行时-创业公司全景.md（16家公司）
  - wiki/synthesis/方向C-异构训练控制面与可观测性-创业公司全景.md（30家公司）
- 分别通过Web搜索微信公众号、36氪、投中网等创投媒体，搜索有过融资或PR报道的创业公司。
- 主要发现：方向A的独立训练平台公司极少，多为机器人本体公司自建；方向B的真正独立AI编译器公司极少；方向C竞争最激烈，云原生厂商占半壁江山。
- 更新 wiki/index.md 的 synthesis 索引表。

## [2026-08-13] maintenance | Inferact 升级为 5.2 正式主类型
- 经用户确认，将 Inferact 从条件性观察升级为 5.2 推理框架正式主类型。
- Updated: `wiki/segments/5.2-推理框架.md`（新增 Inferact 到主类型表）；`wiki/companies/Inferact.md`（Overview 和分类描述更新）；`wiki/index.md`（条目更新，日期改为 2026-08-13）
- Disposition: Update
- Scope: 对 39 家 AI 计算芯片公司的产品布局矩阵进行全面验证更新，基于各子代理对官网和公开资料的 2026-08-13 独立核验结果。
- Changes:
  - 总结表与详细矩阵逐行核对，补充各子代理发现的更新产品名称、量产状态、交付客户和风险信息。
  - 矩阵新增产品细节：NVIDIA Vera Rubin 路线图、GB300 NVL72 当前产品状态；华为 DeepSeek R1 实测性能、910D 送样状态；AWS Inferentia3 量产待确认；Google Trillium GA 时间线；Intel Falcon Shores 取消和 Jaguar Shores 方向；Graphcore Nigel Toon 卸任；Groq LPX 新产品线；Tenstorrent TT-Ascalon S、TT-QuietBox、TT-Forge 编译器；Hailo-10H 第二代神经核心；瑞芯微 RK3572/RK182X 新产品线；Cerebras 推理业务扩展；摩尔线程上市和融资；清微智能 REX1032 新服务器；爱芯元智元曦系列；地平线 HSD V2.0 和征程6E 量产商用；算能科技 BM1690 未见于产品列表；登临科技官网域名流失状态更新；知存科技 WTM2101 KK 级量产出货。
  - 争议与待核验事项从 13 项扩展至 21 项，覆盖本轮新发现的风险和待验证事项。
  - 所有子代理确认无需变更的产品线状态保持原样。

## [2026-08-13] ingest | Prometheus 监控与可观测性

- Disposition: New
- Created: wiki/technologies/Prometheus监控与可观测性.md
- Updated: wiki/index.md
- Summary: 新建技术页面，系统介绍 Prometheus 的定义、架构、核心概念、与 Kubernetes 的关系、替代产品、商业化生态，以及与博思芯宇（主类 3.7）的定位差别。两者在价值链条中为上下游关系而非替代关系：Prometheus 监控软件层指标，博思芯宇覆盖芯片级物理信号；博思芯宇的健康数据可暴露为 Prometheus 指标格式，由 Prometheus 生态完成存储、查询和告警。

## [2026-08-13] lint | 合规整理：See Also 清理、公司命名统一、segment 结构检查、分类归属检查
- 清理所有 wiki/ 下的 "## See Also" 区块（共 28 个文件，含 companies 14 个、questions 12 个、阿里云 2 个）。
- 公司命名规则已统一为"中文名（英文名）"格式；16 个纯中文公司（如一苇宇航、京程智慧等）经核实无公开英文商号，维持纯中文标题。
- 一级 segment 页面 7-数据服务.md 和 8-其他.md 有直接公司链接（违反规则），但当前设计为"暂无二级分类"的一级页面容纳公司；标记为已知例外。
- 二级 segment 页面 1.10-DPU、1.12-类脑芯片、1.13-LPU、5.5-推理及训练运行时优化、8.1-云与AI算力服务、8.2-量子计算、8.3-空间轨道计算 缺少 "## 次类型" 表（共 7 个）。
- Inferact 未在任何 segment 中列出（仅保留 5.2 条件性观察）。
- 修复 index.md 中 Lambda 错放到 people 段的 bug。
- Summary: 150 fidelity suspect(s), 51 evidence error(s), 434 unreferenced raw file(s) (from evidence check script)。

## [2026-08-13] ingest | 阿里云（AlibabaCloud）
- Disposition: New
- Raw: raw/sources/2026-08-13-阿里云AlibabaCloud-横纵分析报告.md
- Updated: 阿里云主体、数据处理与可交易边界尽调；8.1 云与 AI 算力服务；横纵研究报告导入任务追踪清单.md。
- Classification: 主类型 8.1 云与 AI 算力服务，高置信；不设正式次分类。客户购买物与收入承载物是按资源消费或订阅交付的计算、存储、网络、云平台与 MaaS；内部/相邻的调度、芯片和模型能力不构成 3.5、3.6、4.x、5.x 或芯片分类的独立交付证据。

## [2026-08-13] comparison | AI基础设施公司融资总额排名 + AI基础设施公司融资脉络
- Disposition: New
- 参考 eai-vault 的具身智能融资排名页，创建本知识库的 AI 基础设施公司融资总额排名和融资脉络两个比较页面。
- 覆盖 209 家公司页中的融资数据，按 AI 芯片、DPU/网络、AI 软件/平台、算力中心/散热等环节分类。
- 大量公司融资数据来自 L3/L4 来源，已标注证据等级和口径。

## [2026-08-13] ingest | 软通动力（iSoftStone）
- Disposition: New
- Raw: raw/sources/2026-08-13-软通动力信息技术-横纵分析报告.md
- Updated: 软通动力交易、交付与机器人协同尽调；8 其他；软通云（SoftCloud）；横纵研究报告导入任务追踪清单.md。
- Classification: 主类型 8 其他（企业数字技术服务／信创整机与集成），不设正式次分类。整机、适配与售后交付构成可验证边界；AI 服务器、智算中心和开源生态未证明独立 AI infra SKU、合同／计费或外部验收，不归入 3.3、8.1、2.2、4.x 或 5.x。

## [2026-08-13] ingest | 精灵云（Ghostcloud）
- Disposition: New
- Raw: raw/sources/2026-08-13-精灵云-横纵分析报告.md
- Updated: 精灵云主体、产品与军工边界尽调；3.6 集群管理软件；横纵研究报告导入任务追踪清单.md。
- Classification: 主类型 3.6 集群管理软件（正式次类型、待核验）。EcOS/Newben 与 Neptune 的公开材料支持私有化/边缘集群控制与交付边界；不将 AI 调度、无人系统、硬件、国防叙事或融资新闻外推为独立产品、客户/收入、可交易 IP 或机器人生产能力。

## [2026-08-13] ingest | 百格（Baige）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-13-百格服务外包集团-横纵分析报告.md
- Updated: 百格主体、许可与BPO商业化尽调；8 其他；横纵研究报告导入任务追踪清单.md。
- Classification: 主类型 8 其他（企业人力资源／BPO 服务，非 AI infra）；不设正式次分类。名称沿革、许可证、地址、订单/收入、劳动/数据合规和技术/IP 边界待核验。

## [2026-08-13] ingest | 博思芯宇（Bosi Xinyu）
- Disposition: New
- Raw: raw/sources/2026-08-13-bosixinyu-hv-analysis-report.md
- Updated: 博思芯宇主体、技术与商业化尽调；3.7 监控与健康管理软件；3.6 集群管理软件。
- Classification: 主类型 3.7 监控与健康管理软件；正式次类型 3.6 集群管理软件。性能、收入、客户、IP 与芯片 IP 商业化不作为已验证事实。

## [2026-08-13] research | proteanTecs 横纵分析报告
- Status: 已验收。报告位于 `横纵研究报告/` 直接目录；关键一手网页资料已归档至 `raw/sources/`，融资复核、关系网络、冲突项、分类与链接检查通过。
- Entity: ProteanTecs Ltd.（官网隐私政策确认的网站运营主体；合同、IP、收入主体仍待研究核验）。
- Classification: 主 `8 其他（半导体全生命周期监测 IP 与分析平台）`；不设正式次分类，`3.7 监控与健康管理软件` 仅作观察。

## [2026-08-13] research | proteanTecs 主体核验与博思芯宇验收同步
- Disposition: New
- Raw: raw/sources/2026-08-13-proteantecs-privacy-policy.md
- Updated: `wiki/questions/proteanTecs主体、合同边界与分类尽调.md`；`横纵研究报告任务追踪清单.md`；`wiki/index.md`。
- Entity: 公司官网 2026-06 隐私政策将网站与相关信息处理实践归属为 ProteanTecs Ltd.，并列示以色列海法地址；该证据不覆盖美国或其他地区的合同、IP、控制或收入承接主体。
- Status: 博思芯宇更新为已完成／已验收，并按其已验收报告同步为主 3.7、副 3.6；全表已完成并已验收数更新为 212 家。

## [2026-08-12] maintenance | 横纵研究报告验收归档与下一批导入任务
- Updated: `横纵研究报告/验收版/`；`横纵研究报告/横纵研究报告导入任务追踪清单.md`。
- Status: 将 127 篇已完成导入的公司报告归档至验收版；卓新溢泽根目录副本与验收稿 SHA-1 相同，移除重复副本。根目录保留 12 篇尚未形成报告 Raw 与对应公司页的报告，已建立为下一批导入任务。

## [2026-08-12] maintenance | 新增 proteanTecs 横纵研究任务
- Updated: `横纵研究报告任务追踪清单.md`。
- Status: 新增 proteanTecs 为待派发研究／未验收；实体主体与产业链主分类待研究核验。任务总数更新为 234 家，待派发研究数为 1 家。

## [2026-08-12] research | 待研究公司主体核验
- Disposition: Update
- Raw: raw/sources/2026-08-12-待研究公司主体核验.md
- Updated: 横纵研究报告任务追踪清单.md；补充博思芯宇、软通动力、软通云、麒麟软件、阿里云、腾讯云、白格/百格、数澜科技及 Cloudera 的主体线索与限制；精灵云、安桢瑞、星宇智算仍需独立公开证据或用户材料确认。

## [2026-08-12] ingest | 智算云平台与 K8S 服务商线索
- Disposition: New
- Raw: raw/sources/2026-08-12-智算云平台与K8S服务商线索.md；raw/assets/2026-08-12-智算云平台参考.png
- Updated: 横纵研究报告任务追踪清单.md；新增 11 个唯一待派发研究对象：软通动力信息技术、软通云、麒麟软件、精灵云、阿里云、腾讯云、安桢瑞、白格服务外包集团、星宇智算、数澜科技、Cloudera（Taikun 业务线）。道客、谐云科技、青云科技已在库，不重复添加。

## [2026-08-12] maintenance | 第5类模型训练与推理软件分类重构
- Updated: `产业链分类规则.md`；`wiki/segments/5-模型训练与推理开发框架.md`；`5.1`、`5.2`、`5.3`、`5.4`、`5.5` segment 页面；OneFlow、清程极智、第四范式、Baseten、Fireworks AI、Inferact、Moreh、Anyscale、清昴科技、潞晨科技、澎峰科技、进化动力等受影响公司页；`wiki/index.md`；`公司清单参考来源/产业链公司分类总表.md`。
- Classification: `5.1` 严格限定为对标 PyTorch 的训练框架/运行时；`5.2` 严格限定为对标 TensorRT/vLLM/SGLang 的推理框架/引擎/运行时；`5.3` 严格限定为对标 Colossal-AI/DeepSpeed/Megatron-LM/FSDP 的分布式训练工具；`5.4` 增加别名“企业 Agent 与知识系统”；新增 `5.5` 推理及训练运行时优化，并在公司页按 `P/C/S` 标注。
- Boundary: Token/API/GPU 容量/托管推理默认归 `8.1`；只有优化能力本身形成独立客户购买物时才增加 `5.5`。Baseten、Fireworks AI 的主类改为 `8.1`；澎峰、清昴改为 `5.5-C`；清程极智改为 `5.5-S` 主类、`5.2` 条件性次类；OneFlow 改为 `5.1` 主类、`5.3` 次类；第四范式不再列 `5.1/5.2` 正式次类；Inferact 降为 `5.2` 条件性观察。
- Verified: 受影响页面 Markdown 链接可解析；第5类 evidence 检查仅保留既有 segment 页面无 `Raw` 的结构性提示，无新增 fidelity suspect。

#indexmdexcludetag

## [2026-08-12] maintenance | 新增第8类二级分类
- Updated: 新建 `8.2 量子计算`、`8.3 空间／轨道计算`；更新 `产业链分类规则.md`、`产业链公司分类总表.md`、`wiki/segments/8-其他.md`、`wiki/index.md` 及 8 家公司页。
- Classification: 图灵量子、矩量光启、两仪万象、奇算光启归入 `8.2`；星用空间、轨道辰光、一苇宇航、智算星空归入 `8.3`。两类均为观察型研究簇，不代表产品化、客户、定价、交付或相对 GPU/HPC 的机器人优势已证实；空间／轨道计算不合并卫星载荷、在轨计算、地面算力和空间数据服务商业模式。

## [2026-08-12] maintenance | 新增 8.1 云与 AI 算力服务并收紧 4.4 边界
- Updated: 新建 `wiki/segments/8.1-云与AI算力服务.md`；更新 `8-其他`、`4.4-多来源算力资源池化与控制面`、`4-异构调度`、`3.5`、`3.6`、`3.7`、`产业链分类规则.md`、`产业链公司分类总表.md`、`wiki/index.md` 及受影响公司页/问题页。
- Classification: AWS、CoreWeave、Lambda、中科视拓、PPIO、魔形智能、硅基流动、奇点科技、共绩科技按客户购买物和收入承载物归入 8.1；共绩的 4.4 仅条件性观察。Prime Intellect、博云、趋境科技、无问芯穹保留为 4.4 多厂商算力池相关次类或观察对象。
- Boundary: 4.4 更名为“多来源算力资源池化与控制面”，准入要求至少两个独立资源来源、统一发现/配额/计量接口、版本化支持矩阵，以及跨来源作业/迁移/故障切换/统一计费证据；4.1、4.3、3.5 的边界不变。
- Verification: 已将文件路径统一重命名为 `4.4-多来源算力资源池化与控制面.md`，并同步修复索引、segment、公司页和问题页链接；历史日志中的旧路径仅作为历史记录保留。

## [2026-08-12] maintenance | 1.4 二级分类拆分
- Updated: `wiki/segments/DPU.md`、`wiki/segments/FPGA.md`、`wiki/segments/类脑芯片.md`、`wiki/segments/LPU.md`；收窄 `wiki/segments/1.4-其他AI芯片架构.md`；更新 `wiki/segments/1-芯片硬件.md`、`wiki/index.md` 与相关公司页分类字段。
- Classification: DPU、FPGA、类脑芯片、LPU 作为 `1.4` 下独立二级分类；未形成独立分类的 GCU、CGRA、IPU、Wafer-Scale、稀疏计算、RISC-V/XPU、Chiplet 和低功耗无线 MCU/AIoT SoC 继续保留在 `1.4`。
- Rules: 未改动 `产业链分类规则.md` 主表，仅在表下添加四类简要注释。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 地瓜机器人（D-Robotics）；地平线机器人适用性、D-Robotics边界与HSD商业化尽调。
- Verified: 0 个真实证据保真问题；0 个 Raw 引用错误。
- Note: 本次 Raw 报告正文与原始报告逐字一致；391 个未引用 Raw 文件为既有全库待办，本次新增 Raw 已由公司页和开放问题页引用。

## [2026-08-11] ingest | 地瓜机器人（D-Robotics）
- Disposition: New
- Raw: raw/sources/2026-08-11-地瓜机器人-d-robotics-横纵分析报告.md
- Updated: 新建 地瓜机器人（D-Robotics）；更新 地平线机器人适用性、D-Robotics边界与HSD商业化尽调；更新 1.3 NPU（ASIC）。
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。旭日／RDK 的端侧工具链、VLA／VLM 适配和历史地平线渊源不外推为 CUDA-like 平台、独立推理框架、人形安全主控、地平线资产或地瓜的量产收入。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 图灵量子（Turing Quantum）；图灵量子关键尽调问题。
- Verified: 0 个真实证据保真问题；0 个 Raw 引用错误。
- Note: 证据脚本将标题中的导航性英文转写 `Turing Quantum` 标为候选，但原报告未提供官方英文名，页面已明确其非官方品牌主张；391 个未引用 Raw 文件为既有全库待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 图灵量子（Turing Quantum）
- Disposition: New
- Raw: raw/sources/2026-08-11-图灵量子-横纵分析报告.md
- Updated: 新建 图灵量子（Turing Quantum）；新建 图灵量子关键尽调问题；更新 8 其他。
- Classification: 主 8 其他（低置信）、无正式次分类；不得将量子概念自动归为 AI 芯片、集群或机器人训练／推理算力。

## [2026-08-11] ingest | 反曲（ReOrc）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-反曲recurve-横纵分析报告.md
- Updated: 新建 反曲（ReOrc）；新建 反曲（ReOrc）主体、品牌与商业化尽调；更新 8 其他。
- Classification: 主 8 其他（低置信、待核验）；7 数据服务仅条件性观察；不纳入 2.1、4 或 5.1—5.3。招聘／媒体摘要不外推为标准化产品、客户、收入、IP、融资交割或机器人数据能力。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 反曲（ReOrc）；反曲（ReOrc）主体、品牌与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 报告正文与原始报告逐字一致；全库 391 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 华勤技术（Huaqin Technology）
- Disposition: New
- Raw: raw/sources/2026-08-11-华勤技术-横纵分析报告.md
- Updated: 新建 华勤技术（Huaqin Technology）；新建 华勤技术系统交付、客户集中与超节点尽调；更新 3.3 算力中心集成、3.6 集群管理软件、1.5 Scale-up互联通信。
- Classification: 主 3.3 算力中心集成（高置信）；3.6 与 1.5 仅条件性观察。系统集成、跨平台适配与 H-Lab 不外推为独立软件平台、互联芯片、云算力或自研 AI 芯片。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 华勤技术（Huaqin Technology）；华勤技术系统交付、客户集中与超节点尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Parallel Domain；Parallel Domain关键尽调问题。
- Verified: 0 evidence fidelity suspects；0 Raw-reference errors。
- Note: 392 个未引用 Raw 文件为既有全库待办；本次新增 Raw 已被两篇页面引用。

## [2026-08-11] ingest | Parallel Domain
- Disposition: New
- Raw: raw/sources/2026-08-11-parallel-domain-横纵分析报告.md
- Updated: Parallel Domain；Parallel Domain关键尽调问题；7 数据服务

## [2026-08-11] ingest | Hailo
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-hailo-横纵分析报告.md
- Updated: Hailo；Hailo关键尽调问题；1.3 NPU（ASIC）

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Hailo；Hailo关键尽调问题。
- Verified: 0 evidence fidelity suspects；0 Raw-reference errors。
- Note: 未引用 Raw 清单为既有全库待办；本次新增 Raw 已被两篇页面引用。

## [2026-08-11] ingest | Fireworks AI
- Disposition: New
- Raw: raw/sources/2026-08-11-fireworks-ai-横纵分析报告.md
- Updated: 5.2 推理框架；Fireworks AI关键尽调问题

## [2026-08-11] ingest | 中科视拓（SEETACLOUD）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-09-autodl-hv-analysis-report.md
- Updated: 8 其他；中科视拓与视拓云主体、IP 与数据边界尽调

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 中科视拓（SEETACLOUD）；中科视拓与视拓云主体、IP 与数据边界尽调。
- Verified: 0 evidence fidelity suspects；0 Raw-reference errors。

## [2026-08-11] ingest | AMD
- Disposition: New
- Raw: raw/sources/2026-08-11-amd-hv-analysis-report.md
- Updated: 1.1 GPGPU（AI GPU）；1.4 其他AI芯片架构（FPGA）；2.1 加速计算平台

## [2026-08-11] classification | 图灵进化的条件性降级路径
- Updated: `wiki/companies/图灵进化（TuringEvo）.md` 明确其指向 `8 其他` 的链接仅表示分类降级条件，不表示当前归类。
- Classification: 维持暂定主分类 `1.4 其他AI芯片架构`；仅在证实其主要为他方器件的板卡、一体机、集成或贸易服务时，撤销 `1.4` 并迁移至 `8 其他`。

## [2026-08-11] structure | 数据服务与其他分类名单
- Updated: `wiki/segments/7-数据服务.md`、`wiki/segments/8-其他.md` 增加与二级分类页一致的 `## 主类型` / `## 次类型` 表。
- Classification: `8 其他` 收录 15 家公司页明确标注的正式主分类；`7 数据服务` 当前无正式归类公司，保留标准空表。

## [2026-08-11] maintenance | 公司页面展示标题规范化
- Updated: `wiki/companies/` 下 75 个页面的 H1、文件名及 `wiki/index.md` 显示标签统一为“中文简称（English）”。
- Naming: 中文名称仅保留公司通用简称；法人全称保留在正文的主体边界与证据说明中。44 个原有文件名已改为对应显示标题的无空格形式，并完成全库链接级联更新。

## [2026-08-11] lint | 406 issues found, 0 auto-fixed
- Scope: `wiki/companies/` 下 75 个公司页面及其 Raw 引用。
- Verified: 0 个 Raw 引用错误；12 个证据保真候选需人工判断；394 个未引用 raw 文件为既有待办。

## [2026-08-11] research | RISC-V 指令集架构
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-risc-v-international-about.md
- Raw: raw/sources/2026-08-11-risc-v-ratified-specifications.md
- Raw: raw/sources/2026-08-11-rise-risc-v-software-ecosystem.md
- Raw: raw/sources/2026-08-11-linux-kernel-risc-v-architecture.md
- Raw: raw/sources/2026-08-11-risc-v-profiles-and-platform-fragmentation.md
- Raw: raw/sources/2026-08-11-arxiv-risc-v-hpc-ecosystem.md
- Raw: raw/sources/2026-08-11-arxiv-risc-v-robotics-and-functional-safety.md
- Updated: RISC-V 指令集架构; RISC-V 机器人自研芯片生态与功能安全核验

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: RISC-V 指令集架构；RISC-V 机器人自研芯片生态与功能安全核验。
- Verified: 0 evidence fidelity suspects；0 Raw-reference errors。
- Note: 全库未引用 Raw 文件为既有待办，未在本次定向 lint 中改写。

## [2026-08-10] lint | 0 issues found, 0 auto-fixed
- Scope: 12 newly imported company pages, their Raw references, segment links, index entries and import-tracker links.
- Evidence: 0 fidelity suspects; 0 evidence errors. The mechanical report's 381 unreferenced Raw files are pre-existing backlog outside this scoped ingest.

## [2026-08-10] ingest | 上海熠知电子科技有限公司（ThinkForce／熠知电子）
- Disposition: New; Disputed
- Raw: raw/sources/熠知电子_横纵分析报告_修订版.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-10] ingest | 上海阵量智能科技有限公司
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-上海阵量智能科技有限公司横纵分析报告.md
- Updated: 1.1 GPGPU（AI GPU）

## [2026-08-10] ingest | 上海兴感半导体有限公司（兴感半导体）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-兴感半导体-横纵分析报告.md
- Updated: 8 其他

## [2026-08-10] ingest | 西安万像电子科技有限公司（万像电子）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-万像电子_横纵分析报告.md
- Updated: 8 其他

## [2026-08-10] ingest | 星凡星启（成都）科技有限公司（星凡科技）
- Disposition: New
- Raw: raw/sources/2026-08-10-星凡科技_横纵分析报告_修订版.md
- Updated: 3.3 算力中心集成

## [2026-08-10] ingest | 北京超星未来科技有限公司（超星未来／Novauto）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-超星未来_横纵分析报告.md
- Updated: 1.3 NPU（ASIC）

## [2026-08-10] ingest | 瀚博半导体（上海）股份有限公司
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-瀚博半导体-横纵分析报告-修订版.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-10] ingest | 墨芯人工智能科技（深圳）有限公司（墨芯）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-墨芯_横纵分析报告.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-10] ingest | 深圳市迈特芯科技有限公司（迈特芯）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-深圳市迈特芯科技有限公司横纵分析报告-修订版.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-10] ingest | 图灵进化科技（深圳）有限公司
- Disposition: New
- Raw: raw/sources/2026-08-10-图灵进化科技深圳横纵分析报告.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-10] ingest | 苏州元涌科技有限公司（元涌科技）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-元涌科技_横纵分析报告.md
- Updated: 1.3 NPU（ASIC）

## [2026-08-10] ingest | 亿铸科技（Yizhu Technology）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-亿铸科技_横纵分析报告.md
- Updated: 1.10 存算一体/近存计算芯片

## [2026-08-07] maintenance | 规范 raw sources 文件命名
- Renamed: 11 份横纵分析报告统一为 `YYYY-MM-DD-公司名_横纵分析报告.md`；象帝先的第二份同日原始资料使用 `-2` 后缀。
- Renamed: 3 份艾捷科芯招聘网页资料补充采集日期前缀 `2026-08-07-`。
- Updated: 同步更新所有 `wiki/` 中受影响的 Raw 引用和历史日志路径；原始资料正文未改写。

## [2026-08-07] research coordination | 横纵研究报告导入清单与归档整理
- Inventory: `横纵研究报告/导入任务清单.md` 覆盖 52 份物理报告，按生成时间排序；19 份已导入、33 份未导入。
- Archived: 将 17 份已完成 `Raw -> wiki/companies` 导入链路的根目录报告移动至 `横纵研究报告/已导入/`；同步修复移动后受影响的相对内部链接。
- Note: 壁仞科技、沐曦集成电路根目录中的后续版本尚无 raw 导入副本，保留为未导入；`raw/` 不可变，未改写其历史 `Source:` 文本。

## [2026-08-07] delete | 移除 NPU 维基百科源文件
- Disposition: Delete
- Raw: raw/sources/2026-08-07-wikipedia-neural-processing-unit.md（已删除）
- Note: 因应删除需求，同步清理 [[wiki/technologies/AI加速器分类与可编程性.md]] 的 Raw 引用及对应 log 条目

## [2026-08-06] classification | 沐曦集成电路 回链 segments
- Updated: `wiki/segments/1.1-GPGPU.md`（主类型表）、`wiki/segments/2.1-加速计算平台.md`（次类型表）
- Note: 沐曦主分类 1.1、次分类 2.1，与壁仞科技同归位

## [2026-08-06] structure | 产业链分段页面
- Created: `wiki/segments/` 下 8 个一级分类页 + 31 个二级分类页
- Scope: 一级页仅列二级分类链接；二级页 `## 主类型` / `## 次类型` 两表回链 `wiki/companies/`
- Note: 仅壁仞科技（Biren Technology）页面存在，其主分类 1.1、次分类 2.1 已在对应二级页回链；其余二级页待公司页导入后填充

## [2026-08-06] ingest | 沐曦集成电路（MetaX）
- Disposition: New
- Raw: raw/sources/2026-08-06-沐曦集成电路_横纵分析报告.md
- Updated: 沐曦集成电路（MetaX）; 沐曦集成电路关键尽调问题

## [2026-08-06] ingest | 壁仞科技（Biren Technology）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-壁仞科技_横纵分析报告.md


## [2026-08-06] research coordination | 首批横纵研究任务清单
- Scope: `产业链公司分类总表.md` 中跳过第 6 类后的前 10 家公司
- Deliverables: `横纵研究报告/` 下的独立 Markdown 报告；状态由 `横纵研究任务清单.md` 追踪

## [2026-08-06] research coordination | 首批横纵研究报告验收完成
- Completed: 象帝先、砺算科技、登临科技、摩尔线程、沐曦集成电路、天数智芯、壁仞科技、芯瞳半导体、格兰菲、艾捷科芯
- Deliverables: `横纵研究报告/` 下 10 份 Markdown 报告；验收状态与分类复核结论见 `横纵研究任务清单.md`
- Classification follow-up: 格兰菲、艾捷科芯的总表暂定 1.1 归类被报告证据否定，待后续对总表执行单独的 cascade update

## [2026-08-06] classification update | 新增图形GPU二级分类
- Updated: `产业链分类规则.md`、`产业链公司分类总表.md`、象帝先/砺算科技/芯瞳半导体/格兰菲/摩尔线程横纵分析报告及任务清单
- Decision: 新增 1.8「图形GPU（桌面／工作站／专业可视化）」；按当前产品重心区分于 1.1 GPGPU（AI GPU），不将 DDIC 自动并入该标签

## [2026-08-06] research coordination | 横纵研究任务清单扩展至全量公司
- Scope: `产业链公司分类总表.md` 的 152 家去重公司
- Queue: 131 家纳入研究；第 6 类的 21 家标记为跳过（不作为外部标的）
- Status: 保留首批 10 家的已验收记录；其余非第 6 类公司均待派发

## [2026-08-06] research coordination | 前50家公司横纵研究验收完成
- Scope: 任务清单序号 1–50（均非第 6 类）
- Deliverables: `横纵研究报告/` 下 50 份 Markdown 横纵研究报告，均已完成分类复核
- Tracking: `横纵研究任务清单.md` 的序号 1–50 已标记「已完成｜已验收」

## [2026-08-06] research coordination | 前50家公司报告路径复核通过
- Validation: 任务清单序号 1–50 均为「已完成｜已验收」，且对应 Markdown 报告文件存在
- Remediation: 补交沐曦集成电路、壁仞科技缺失报告；修正壁仞的主分类编号为 1.1 GPGPU（AI GPU）
## [2026-08-07] ingest | AI加速器分类与可编程性
- Disposition: New; Update
- Raw: raw/sources/2026-08-07-enflame-topsrider-platform.md
- Raw: raw/sources/2026-08-07-google-cloud-tpu-architecture.md
- Raw: raw/sources/2026-08-07-nvidia-cuda-programming-model.md
- Updated: 燧原科技（Enflame）
- Updated: 燧原科技Enflame关键尽调问题
- Updated: 1.4 其他AI芯片架构（FPGA、LPU、IPU、DPU等）

## [2026-08-07] lint | 114 issues found, 56 auto-fixed
- Auto-fixed: 补全 `wiki/index.md` 中 16 家公司、39 个产业链页面和 16 个开放问题页面的缺失条目。
- Updated: 清除 29 个 `See Also` 宽泛引用区块；将 16 家公司按其页面中的主/次分类回填至二级分类表；同步 `产业链公司分类总表.md` 的冲突分类。
- Remaining: 15 项证据保真候选、39 个缺少 `Raw` 的产业链结构页、4 个未引用原始资料候选，均需后续研究判断或补充原始来源。

## [2026-08-07] ingest | 艾捷科芯技术路线与分类复核
- Disposition: Update; Disputed
- Raw: raw/sources/2023-09-26-艾捷科芯创始人谈NPU技术路线.md
- Raw: raw/sources/2026-07-25-艾捷科芯GPGPU-SIMT专利.md
- Raw: raw/sources/2026-08-07-艾捷科芯UMD工程师招聘.md
- Raw: raw/sources/2026-08-07-艾捷科芯AI编译器工程师招聘.md
- Raw: raw/sources/2026-08-07-艾捷科芯Triton编译器实习生招聘.md
- Updated: 艾捷科芯（北京艾捷科芯科技有限公司）; 艾捷科芯关键尽调问题; 1.1 GPGPU（AI GPU）; 2.1 加速计算平台（CUDA-like）
- Classification: 主分类由 `8 其他/架构待核验` 更新为 `1.1 GPGPU（AI GPU，研发路线）`；新增次分类 `2.1 加速计算平台（研发路线）`
- Conflict: 2023 年“可编程 NPU、不做图形处理”口径与 2026 年 GPGPU/SIMT 专利及 GPU/CUDA-like 招聘工件并存，保留为开放问题

## [2026-08-07] lint | 60 issues found, 0 auto-fixed
- Auto-fixed before verification: 清除宽泛 `See Also`/`关系导航` 区块；补齐 `wiki/index.md` 遗漏的 3 家公司与 3 个开放问题页面；按公司页主/次分类回填元川微、昆仑芯、太初元碁至对应二级分类表，并同步分类总表。
- Verified: 78 篇 `wiki/` 文章均已进入索引；19 家公司标题均为“中文（English）”格式；一级分类页仅链接二级分类；全部二级分类页均包含 `## 主类型` 与 `## 次类型`。
- Remaining: 20 项证据保真候选、39 个缺少 `Raw` 的产业链结构页、1 个未引用原始资料（`raw/sources/2026-08-06-象帝先_横纵分析报告.md`）。未伪造 Raw 引用；这些问题需后续补充来源或进行逐项研究判断。

## [2026-08-07] structure | 公司页面 Obsidian 显示名称统一
- Updated: 重命名 `wiki/companies/` 下 14 个有公开英文名的页面为“中文（English）.md”；5 个未确认对外英文名的页面保留纯中文文件名与标题。
- Cascade: 同步更新 `wiki/index.md`、二级分类页中的 Obsidian 链接目标和显示文本，以及 `产业链公司分类总表.md` 的名称。

## [2026-08-07] structure | 修复产业链分类页链接
- Updated: 将 `wiki/segments/` 内的 58 个 WikiLink 改为库根目录限定路径：二级分类使用 `wiki/segments/...`，公司页使用 `wiki/companies/...`。
- Verified: 所有链接目标文件存在；清除重命名后遗留的裸文件名与转义别名分隔符。

## [2026-08-11] lint | 465 issues found, 2 auto-fixed
- Auto-fixed: 修正 `wiki/index.md` 中钛芯智冷问题页的悬空路径；移除 `wiki/questions/长光华芯关键尽调问题.md` 的宽泛 `See Also` 区块。
- Structure: `8 其他` 一级页已移除直接公司名单；`1.6 Scale-out互联通信` 已补齐 `## 次类型` 表。全部一级分类页仅链接二级分类，全部二级分类页均包含 `## 主类型` 与 `## 次类型`。
- Classification: 75 家公司中 60 家已回链至对应二级分类名单；其余 15 家公司在公司页明确归为 `8 其他`，按规则不写入一级分类页。
- Remaining: evidence check 报告 30 项证据保真候选、41 个缺少 `Raw` 的页面和 400 个未引用原始资料。未伪造原始资料引用；这些问题需后续补充证据或逐项研究判断。

## [2026-08-07] classification | 2.1 加速计算平台准入标准
- Updated: `产业链分类规则.md`、`wiki/segments/2.1-加速计算平台.md`、受影响的芯片分段、公司页、开放问题、分类总表与索引。
- Decision: `2.1` 采用五项硬条件与 `70` 分阈值，评价平台功能完整度和挑战 CUDA 的长期潜力，不以前置生产级 benchmark、独立软件收入或跨厂商中立为条件。
- Included: 摩尔线程、壁仞科技、燧原科技、沐曦集成电路、天数智芯。
- Observation: 昆仑芯、太初元碁；仅作为优先复核对象，不具有 `2.1` 标签。
- Removed: 登临科技、算能科技、此芯科技、砺算科技、芯瞳半导体、艾捷科芯。

## [2026-08-07] lint | 11 issues found, 1 auto-fixed
- Auto-fixed: 修正 `wiki/companies/象帝先（Xiangdixian）.md` 的 Raw 引用路径；对应原始资料现已可解析且不再误报为未引用。
- Verified: 分类总表与 2.1 分段均为 5 家正式成员、2 家观察候选、0 个旧标签残留；受影响表格结构正常，相关 Wiki-link 均可解析。
- Remaining: 10 项证据保真候选，均为需人工判断的定性措辞或原文格式差异；0 项证据引用错误，0 个未引用 raw 文件。

## [2026-08-07] ingest | 蓝芯算力
- Disposition: New
- Raw: raw/sources/2026-08-06-蓝芯算力_横纵分析报告.md

## [2026-08-07] ingest | 迈特芯
- Disposition: New
- Raw: raw/sources/2026-08-06-迈特芯_横纵分析报告.md

## [2026-08-07] ingest | 清微智能（TsingMicro）
- Disposition: New
- Raw: raw/sources/2026-08-06-清微智能TSingMicro_横纵分析报告.md

## [2026-08-07] ingest | 图灵进化（TuringEra）芯片技术路线复核
- Disposition: Update; Disputed
- Raw: raw/sources/2026-03-07-turingera-edge-ai-soc-release.md
- Raw: raw/sources/2026-03-12-图灵进化AWE产品发布稿.md
- Raw: raw/sources/iluvatar-智铠100产品页.md
- Updated: 图灵进化（TuringEra）; 图灵进化关键尽调问题; 产业链公司分类总表
- Naming: 英文发布稿使用 TuringEra；TuringEvo 保留为联系邮箱域名别名并待一手品牌材料核验
- Conflict: U100 与天数智芯智铠100（MR-V100）的 32GB HBM2e、150W、128 路 1080P 解码等公开指纹高度重合，但未证实采购、OEM、授权或其他商业关系
- Classification: 维持 `8 其他`，不授予 `1.1 GPGPU` 或 `2.1 加速计算平台` 标签

## [2026-08-07] ingest | 时识科技（SynSense）
- Disposition: New
- Raw: raw/sources/2026-08-06-知存科技SynSense_横纵分析报告.md

## [2026-08-07] ingest | 瀚博半导体
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-瀚博半导体_横纵分析报告.md

## [2026-08-07] ingest | 亿铸科技
- Disposition: New
- Raw: raw/sources/2026-08-06-亿铸科技_横纵分析报告.md

## [2026-08-07] ingest | 时识科技（SynSense）
- Disposition: Update
- Raw: raw/sources/2026-08-06-时识科技_横纵分析报告.md
- Updated: 时识科技（SynSense）
- Updated: 时识科技SynSense关键尽调问题

## [2026-08-07] ingest | 后摩智能（HoumoAI）
- Disposition: New
- Raw: raw/sources/2026-08-06-后摩智能HoumoAI_横纵分析报告.md

## [2026-08-07] ingest | 墨芯
- Disposition: New
- Raw: raw/sources/2026-08-06-墨芯_横纵分析报告.md

## [2026-08-07] ingest | 超星未来
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-超星未来_横纵分析报告.md

## [2026-08-07] ingest | 芯合智汇
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-芯合智汇_横纵分析报告.md
- Updated: 8 其他; 产业链公司分类总表

## [2026-08-07] ingest | 万像电子
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-万像电子_横纵分析报告.md

## [2026-08-07] ingest | 星凡科技
- Disposition: New
- Raw: raw/sources/2026-08-06-星凡科技_横纵分析报告.md

## [2026-08-07] ingest | 阵量智能
- Disposition: New
- Raw: raw/sources/2026-08-06-阵量智能_横纵分析报告.md

## [2026-08-07] ingest | 兴感半导体
- Disposition: New
- Raw: raw/sources/2026-08-06-兴感半导体_横纵分析报告.md

## [2026-08-07] ingest | 芯明智能
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-芯明智能_横纵分析报告.md

## [2026-08-07] ingest | 熠知电子
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-熠知电子_横纵分析报告.md

## [2026-08-07] ingest | 九天睿芯
- Disposition: New
- Raw: raw/sources/2026-08-06-九天睿芯_横纵分析报告.md

## [2026-08-07] ingest | 思澈科技
- Disposition: New
- Raw: raw/sources/2026-08-06-思澈科技_横纵分析报告.md

## [2026-08-07] ingest | 复睿微电子
- Disposition: New
- Raw: raw/sources/2026-08-06-复睿微电子_横纵分析报告.md

## [2026-08-07] ingest | 泰为电子
- Disposition: New
- Raw: raw/sources/2026-08-06-泰为电子_横纵分析报告.md

## [2026-08-07] coordination | 横纵研究任务清单交付核对
- 复核 `横纵研究报告/` 后，恢复了 38 个报告文件缺失项目为待研究；仅将存在于该目录且通过既有验收的 12 项保留为已验收。
- 已按总表顺序重新派发第 1–3 项；第 6 类模型公司仍维持跳过状态。

## [2026-08-07] coordination | 横纵研究任务清单目录范围更正
- 上一条核对只检查了顶层目录，范围不完整；用户确认 `横纵研究报告/` 与 `横纵研究报告/已导入/` 均为上一批报告的有效交付目录。
- 以两个目录的并集复核后，首 50 家均有报告；清单已恢复为已验收，并按实际位置更新第 1–40 项路径。
- 已派发第 51–53 项；第 6 类模型公司继续跳过。

## [2026-08-07] coordination | 横纵研究验收：云豹智能
- 已验收：`横纵研究报告/云豹智能Jaguar_横纵分析报告.md`。
- 分类复核：主 `1.4 其他AI芯片架构（DPU）`；未将 400G、RDMA 和 AI 集群定位直接扩展为 `1.6 Scale-out互联通信`，等待端到端交付和收入证据。

## [2026-08-07] coordination | 横纵研究验收：中科驭数
- 已验收：`横纵研究报告/中科驭数_横纵分析报告.md`。
- 分类复核：主 `1.4 其他AI芯片架构（DPU）`；`1.6 Scale-out互联通信` 仅作为有条件次分类；按 2.1 五项硬条件公开证据评分 38/100，不纳入 2.1。
- 主要未知：融资/当前股权、匿名客户与收入、性能配置、AI 框架后端及供应链。

## [2026-08-07] coordination | 横纵研究验收：云脉芯联
- 已验收：`横纵研究报告/云脉芯联Corigine_横纵分析报告.md`；补正后合作网络已拆分为投资方/股东、客户/订单、产业合作、技术/联合研发、高校/科研渊源五个独立小节。
- 分类复核：主 `1.4 其他AI芯片架构（DPU）`；`1.6 Scale-out互联通信` 暂不设次分类，保留为待客户交付、端到端性能和收入证据验证的观察方向；不纳入 2.1/2.2。
- 主要未知：具名客户、订单/回款、芯片规格、AI 集群性能、软件栈与融资累计口径。

## [2026-08-07] coordination | 横纵研究验收：大禹智芯
- 已验收：`横纵研究报告/大禹智芯_横纵分析报告.md`。
- 分类复核：主 `1.4 其他AI芯片架构（DPU）`；`1.6 Scale-out互联通信` 仅为有条件次分类，等待跨节点 AI 集群交付、端到端性能和收入证据；不纳入 2.1/2.2。
- 主要未知：2024 年后的经营连续性、芯片/板卡规格与量产质量、具名客户/订单/回款、软件版本和供应链。

## [2026-08-07] coordination | 横纵研究验收：益思芯
- 已验收：`横纵研究报告/益思芯_横纵分析报告.md`。
- 分类复核：主 `1.4 其他AI芯片架构（DPU/可编程智能网卡）`；不将 RoCE/智能网卡宣传直接计入 `1.6 Scale-out互联通信`，等待集群交付、客户与收入证据；不纳入 2.1。
- 主要未知：主体与产品持续性、融资轮次/股权、具名客户、性能/软件栈和供应链。

## [2026-08-07] coordination | 横纵研究验收：北中网芯
- 已验收：`横纵研究报告/北中网芯_横纵分析报告.md`。
- 分类复核：主 `1.4 其他AI芯片架构（DPU/网络安全数据处理芯片）`；不纳入 `1.6` 或 `2.1`。
- 风险结论：北京证监局对特定 400 枚芯片交易的行政处罚、控制权/IP/回购诉讼/执行和持续经营不确定性，使其只能作为高风险观察对象；暂停投资、并购和生产采购，仅在法律、财务、资产和实物核验完成后考虑隔离 PoC。

## [2026-08-07] ingest | 矩量光启
- Disposition: New
- Raw: raw/sources/2026-08-06-矩量光启_横纵分析报告.md

## [2026-08-07] research coordination | 营收数据补充横纵研究队列
- Source: `各路线主流公司营收数据.md`
- Added: NVIDIA、AMD、海光信息、Intel、Google、华为（昇腾）、阿里巴巴（平头哥）、寒武纪、云天励飞、Altera、Groq、Graphcore，共 12 家，追加至 `横纵研究任务清单.md` 文末。
- Scope: 多业务集团仅研究 AI 芯片、算力基础设施及紧密相关的软件/云服务；不展开搜索、广告、电商、终端等无直接关系业务。

## [2026-08-07] ingest | 苹芯科技（PIMCHIP）
- Disposition: New
- Raw: raw/sources/2026-08-06-苹芯科技_横纵分析报告.md

## [2026-08-07] ingest | 两仪万象
- Disposition: New
- Raw: raw/sources/2026-08-06-两仪万象_横纵分析报告.md

## [2026-08-07] correction | 两仪万象（Qosmos）
- Disposition: Corrected; Reclassified from `1.4 其他AI芯片架构` to `8 其他`.
- Reason: 用户提供的 `qosmos.cn` 官网、公司新闻 API、关联论文与独立媒体确认主体为两仪万象（北京）科技有限公司，主营中性原子量子计算整机、测控与核心器件，不是光子/光电 AI 芯片。
- New Raw: raw/sources/2026-08-07-两仪万象（Qosmos）_横纵分析报告.md
- Updated: 两仪万象公司页；两仪万象关键尽调问题；1.4 其他AI芯片架构；8 其他；产业链公司分类总表；横纵研究任务清单；wiki/index.md

## [2026-08-07] ingest | 伊辛智能
- Disposition: New
- Raw: raw/sources/2026-08-06-伊辛智能_横纵分析报告.md

## [2026-08-07] ingest | 光本位科技
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-光本位科技_横纵分析报告.md

## [2026-08-07] ingest | 启明光子
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-启明光子_横纵分析报告.md

## [2026-08-07] research | AI基础设施补充公司初筛
- Disposition: New
- Raw: raw/sources/2026-08-07-补充公司扫描-芯片硬件.md
- Raw: raw/sources/2026-08-07-补充公司扫描-AI基础软件.md
- Raw: raw/sources/2026-08-07-补充公司扫描-集群与数据.md
- Raw: raw/sources/2026-08-07-补充公司名单主代理验收.md
- Created: wiki/comparisons/AI基础设施补充公司初筛-2026-08-07.md
- Result: 验收 56 家独立新增候选（A 类 26、B 类 29、C 类 1）；灵汐科技、地瓜机器人因已检出机构融资由 C 更正为 B；Modular、Run:ai、CoolIT Systems 因已并购不计为独立候选。

## [2026-08-07] research coordination | 联网补充公司加入横纵研究队列
- Updated: `横纵研究任务清单.md`
- Added: 序号 165–220，共 56 家去重新增候选（A 类 26、B 类 29、C 类 1）。
- Queue: 全清单 220 家；排除第 6 类 21 家后，横纵研究队列为 199 家。
- Status: 新增 56 家均为待派发/未开始；未创建空报告文件，也未改动产业链分类总表。
- Dedup: 与序号 1–164 的中英文名、别名及现有报告文件名核对，0 个冲突。

## [2026-08-07] ingest | 光子芯力
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-06-光子芯力_横纵分析报告.md

## [2026-08-07] ingest | 奇算光启
- Disposition: New
- Raw: raw/sources/2026-08-06-奇算光启_横纵分析报告.md

## [2026-08-07] ingest | 曦智科技（Lightelligence）
- Disposition: New
- Raw: raw/sources/2026-08-06-曦智科技Lightelligence_横纵分析报告.md

## [2026-08-07] ingest | 芯算科技
- Disposition: New
- Raw: raw/sources/2026-08-06-芯算科技_横纵分析报告.md

## [2026-08-07] ingest | 壁仞科技（Biren Technology）
- Disposition: Update; Disputed
- Raw: raw/sources/2026-08-07-壁仞科技_横纵分析报告-2.md
- Updated: 壁仞科技（Biren Technology）

## [2026-08-07] ingest | 沐曦集成电路（MetaX）
- Disposition: Update; Disputed
- Raw: raw/sources/2026-08-06-沐曦集成电路_横纵分析报告-2.md
- Updated: 沐曦集成电路（MetaX）

## [2026-08-07] ingest | 光子/光电计算芯片
- Disposition: New
- Raw: raw/sources/2026-08-07-光子光电计算芯片横纵分析报告.md

## [2026-08-07] ingest | 存算一体与近存计算（CIM/PIM）
- Disposition: New
- Raw: raw/sources/2026-08-07-存算一体近存计算CIM-PIM横纵分析报告.md

## [2026-08-07] query | Archived: 光子光电与CIM-PIM在大模型训练中的适用性
- Updated: 光子光电计算芯片；存算一体与近存计算（CIM/PIM）

## [2026-08-07] taxonomy | 新增 1.9 光子/光电计算与 1.10 存算一体/近存计算
- Added: `1.9 光子/光电计算芯片`；`1.10 存算一体/近存计算芯片`。
- Reclassified: 曦智科技、芯算科技、光子芯力、光本位科技、启明光子、伊辛智能、奇算光启、矩量光启由 `1.4` 调整至 `1.9`；低置信度和路线待核验状态保留。
- Reclassified: 后摩智能、苹芯科技、亿铸科技、九天睿芯由 `1.4` 调整至 `1.10`；低置信度和主体/产品待核验状态保留。
- Secondary: 曦智科技以 `1.5 Scale-up` 为待商业验证次分类，`1.6 Scale-out` 为条件性候选。
- Boundary: `1.7 HBM` 包含以存储产品为核心的 HBM/DRAM-PIM；SRAM/Flash/PCM/ReRAM CIM 和计算型近存/Chiplet 进入 `1.10`。
- Updated: 产业链分类规则；产业链公司分类总表；横纵研究任务清单；受影响公司页、问题页、技术页、产业链页及 wiki/index.md。

## [2026-08-10] research coordination | 横纵研究报告验收筛选
- Scope: 审阅 `横纵研究报告/已导入/` 的 51 份 Markdown 报告，并以 `横纵研究报告/验收版/` 原有三篇报告为深度研究基准。
- Accepted: 移动 24 份主体可明确识别、且主体内容以单家公司纵向历程、横向竞争、行动建议与尽调为核心的报告至 `横纵研究报告/验收版/`。
- Retained: 27 份报告保留在 `横纵研究报告/已导入/`；原因包括主体/产品待消歧、研究对象仅为名称线索，或研究对象为技术路线而非单一公司。
- Verified: 验收版现有 27 份 Markdown 报告，已导入目录保留 27 份；仅调整报告目录，未改写报告正文或 raw 资料。

## [2026-08-10] research coordination | 重建横纵研究报告任务追踪清单
- Created: `横纵研究报告任务追踪清单.md`。
- Scope: 保留 `横纵研究任务清单.md` 的 220 个研究对象及总表暂定分类，仅保留公司简称、主体全称、分类、研究状态和验收状态。
- Status: 以 `横纵研究报告/验收版/` 为唯一完成依据；当前 28 篇 Markdown 中有 26 篇公司报告、2 篇独立技术报告，因此 26 家标记为已完成/已验收，194 家标记为待派发研究/未验收。
- Entity names: 删除主体栏中的来源、置信度和消歧说明；已验收且原表缺少主体名称的公司保留 `—`，其余尚无已确认主体名称的对象标记为 `待核验`。

## [2026-08-10] cleanup | 删除未通过验收报告衍生页面与 raw 报告
- Basis: 仅保留能对应 `横纵研究报告/验收版/` 的公司报告；验收版中的 2 篇技术路线报告不创建公司页。
- Deleted: `wiki/companies/` 下 27 个未验收报告衍生公司页；对应的 27 个 `wiki/questions/` 尽调问题页；`raw/sources/` 下 30 个未验收公司横纵报告（含 2 份未验收补充/副本及 3 个未进入验收版的后续公司报告）。
- Company pages: 万像电子、两仪万象、中科驭数、九天睿芯、云脉芯联、云豹智能、亿铸科技、伊辛智能、元涌科技、光子芯力、光本位科技、兴感半导体、启明光子、图灵进化、墨芯、复睿微电子、奇算光启、思澈科技、星凡科技、泰为电子、瀚博半导体、熠知电子、矩量光启、芯明智能、超星未来、迈特芯、阵量智能。
- Raw extras: `2026-08-07-两仪万象（Qosmos）_横纵分析报告.md`、`2026-08-06-壁仞科技_横纵分析报告-2.md`、`2026-08-06-沐曦集成电路_横纵分析报告-2.md`、`2026-08-07-中科驭数_横纵分析报告.md`、`2026-08-07-云脉芯联Corigine_横纵分析报告.md`、`2026-08-07-云豹智能Jaguar_横纵分析报告.md`；其余删除 raw 报告按上述公司名一一对应。
- Retained: 25 个验收版公司页及其验收报告 raw；官网、公告、论文等独立原始证据未删除。
- Cascade: 更新 `wiki/index.md`、1.3/1.4/1.9/1.10/8 分类页与两篇技术页；`产业链公司分类总表.md`、研究任务清单和 `不合格报告暂存/` 保留为研究队列/历史记录。

## [2026-08-10] research coordination | 第6类公司调整为跳过研究
- Updated: `横纵研究报告任务追踪清单.md`。
- Scope: 总表暂定分类首项属于第 6 类「模型类型与计算负载特征」的 21 家公司。
- Status: 研究状态由 `待派发研究` 调整为 `跳过研究`，验收状态由 `未验收` 调整为 `不适用`；其余 199 家状态不变。

## [2026-08-10] research coordination | 创建横纵研究报告导入任务追踪清单
- Created: `横纵研究报告/横纵研究报告导入任务追踪清单.md`。
- Scope: 继承 `横纵研究报告任务追踪清单.md` 的公司名单并移除 21 家第 6 类公司，共追踪 199 家。
- Imported: 25 家已同时具备验收版公司报告、对应 `raw/sources/` 报告和 `wiki/companies/` 公司页。
- Pending: 元涌科技、迈特芯、图灵进化、亿铸科技、墨芯、瀚博半导体共 6 份新增验收报告标记为待导入。
- Exception: “知存科技 SynSense”现有验收稿和 Raw 实际研究时识科技（SynSense），且无独立知存科技（Witmem）公司页，标记为主体映射待纠偏。
- Remaining: 167 家暂无验收版公司报告，尚未进入导入阶段。

## [2026-08-10] correction | 知存科技（Witmem）与时识科技（SynSense）主体拆分
- Disposition: Corrected; Outdated evidence chain isolated.
- Decision: 两者为不同公司研究对象；旧报告实际研究时识科技，不得视为知存科技（Witmem）已研究或已导入。
- Report: 将 `横纵研究报告/验收版/知存科技SynSense_横纵分析报告.md` 移至 `不合格报告暂存/知存科技SynSense_主体消歧历史稿.md`；历史 Raw `raw/sources/2026-08-06-知存科技SynSense_横纵分析报告.md` 按不可变原则保留不变。
- Witmem: 改为 `1.10 存算一体/近存计算芯片（待独立研究）`；北京/杭州主体关系待穿透；按用户要求暂停横纵研究，不创建报告、Raw、公司页或尽调页。
- SynSense: `wiki/companies/时识科技（SynSense）.md` 与 `wiki/questions/时识科技SynSense关键尽调问题.md` 仅保留 `raw/sources/2026-08-06-时识科技_横纵分析报告.md` 为 Raw 证据链。
- Updated: `产业链公司分类总表.md`、`横纵研究任务清单.md`、`横纵研究报告任务追踪清单.md`、`横纵研究报告/横纵研究报告导入任务追踪清单.md`、`公司清单参考来源/ai_infra_value_chain_company_map.md`、`wiki/companies/时识科技（SynSense）.md`、`wiki/questions/时识科技SynSense关键尽调问题.md`、`wiki/segments/1.10-存算一体近存计算芯片.md`、`wiki/index.md`。
- Import status: 导入追踪清单保留 199 家（不含第 6 类）；当前 25 家已导入、12 家待导入、162 家暂无验收报告。

## [2026-08-10] lint | 0 issues found, 0 auto-fixed
- Scope: `wiki/companies/时识科技（SynSense）.md`、`wiki/questions/时识科技SynSense关键尽调问题.md` 及本次主体纠偏涉及的清单、链接与文件边界。
- Evidence: 0 项 Raw 引用错误；`2026-08-10` 被机械检查列为 1 项 fidelity suspect，经判断为页面 `Updated` 元数据，非承重事实不匹配。
- Verified: 220 家研究追踪对象、199 家导入追踪对象、37 家验收公司报告、25 家已导入、12 家待导入、162 家暂无验收报告；本次涉及的本地 Markdown 链接均可解析。
- Boundary: 历史错误 Raw 保留为未引用审计材料；全库其他未引用 Raw 属既有导入积压，不在本次主体纠偏范围内。

## [2026-08-10] research coordination | 知存科技（Witmem）主体确认
- Decision: 将知存科技（Witmem）的当前对应主体确认为 `杭州知存算力科技有限公司`；官网首页和“公司简介”页的版权及 ICP 备案主体均为该公司。
- Raw: `raw/sources/2026-08-10-witmem-official-website-legal-entity.md`
- Evidence: Witmem 官网首页及公司简介页，访问 2026-08-10。
- Boundary: 此确认只覆盖官网运营/品牌承接主体；北京知存科技有限公司在既有校企合作材料中的出现，不单独证明其承接当前融资、IP、合同或产品。
- Updated: `横纵研究报告任务追踪清单.md`、`横纵研究任务清单.md`、`横纵研究报告/横纵研究报告导入任务追踪清单.md`。


## [2026-08-10] lint | 460 issues found, 0 auto-fixed
- Scope: 全库 `wiki/`（107 篇文章）与 `raw/`（428 个 Markdown 原始资料）。
- Verified: 索引覆盖全部现存 wiki 文章；65 个 `Raw` 引用及正文 Markdown/Wiki-link 均可解析；索引中有 1 个 `Clippings/` 外部条目，不是 `wiki/` 文章。
- Evidence: 41 个产业链分类页缺少 `Raw` 字段；机械检查产生 26 个 fidelity suspect，均为分析性措辞、内部分类标签或页面元数据/格式差异，未确认有承重事实与其关联 Raw 不一致。
- Backlog: 381 个 raw 文件未被任何文章引用；37 个文章页面无来自其他 wiki 文章的入链（其中 25 个为尽调问题页）。
- Boundary: 上述证据、入链与索引范围问题均需研究编译或信息架构决策，未作事实性或结构性推断式修复。

## [2026-08-10] maintenance | 公司页名称简化
- Updated: `wiki/companies/` 中 12 个以法定主体全称命名的页面，改为公司简称（保留必要英文品牌），并同步更新 `wiki/index.md` 与产业链页中的链接。
- Boundary: 正文中的法定主体事实、`raw/` 不可变资料、历史日志和研究任务清单未改写。

## [2026-08-10] maintenance | 修复 companies 索引表格断行
- Updated: 删除 `wiki/index.md` 的 `companies` 表格内部空行，使公司条目保持为连续的单张 Markdown 表格。

## [2026-08-10] maintenance | 修复 companies 链接路径
- Updated: 将 6 个含英文空格的公司页文件名改为无空格路径，并同步更新 `wiki/index.md` 与产业链页引用；同时使后摩智能索引显示名与页面标题一致。
- Verified: `companies` 索引的 37 条链接及全库 48 条公司页 Obsidian 链接均可解析。

## [2026-08-10] maintenance | 创建公司谱系目录
- Created: `wiki/lineages/`。
- Scope: 后续用于按人才来源、技术路线或资本谱系整理公司，并存放对应输出页面。
- Index: 暂不新增空主题表；待首个谱系页面创建后按现有索引规范登记。

## [2026-08-10] research coordination | 横纵研究报告导入批次盘点
- Inventory: `横纵研究报告/验收版/` 当前有 80 份报告；37 份公司报告已具备验收报告、Raw 和公司页三项导入证据。
- Queued: 38 份新增公司报告及 2 份独立技术报告标记为本批次待导入；星凡科技、熠知电子的非修订稿及泰为电子旧稿由相应修订版覆盖，不重复建立证据链。
- Tracker: 已更新 `横纵研究报告/横纵研究报告导入任务追踪清单.md` 的汇总、待导入队列及 38 行公司状态；共享 `wiki/index.md` 与各报告导入日志待各专属页面通过校验后统一收口。

## [2026-08-10] ingest | 两仪万象（Qosmos）
- Disposition: New
- Raw: raw/sources/两仪万象（Qosmos）_横纵分析报告.md
- Updated: 两仪万象（Qosmos）；两仪万象关键尽调问题

## [2026-08-10] ingest | 中科加禾（XCoreSigma）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-10-zhongkejiahe-hv-analysis.md
- Updated: 中科加禾（XCoreSigma）；中科加禾关键尽调问题

## [2026-08-10] ingest | 中科驭数（YUSUR）
- Disposition: New
- Raw: raw/sources/2026-08-10-中科驭数_横纵分析报告.md
- Updated: 中科驭数（YUSUR）；中科驭数关键尽调问题

## [2026-08-11] ingest | 九天睿芯（REEXEN）
- Disposition: New; Disputed
- Raw: raw/sources/九天睿芯_横纵分析报告.md
- Updated: 九天睿芯（REEXEN）；九天睿芯REEXEN关键尽调问题

## [2026-08-11] ingest | 云脉芯联（Corigine）
- Disposition: New
- Raw: raw/sources/云脉芯联横纵分析报告.md
- Updated: 云脉芯联（Corigine）；云脉芯联关键尽调问题

## [2026-08-11] ingest | 云豹智能
- Disposition: New
- Raw: raw/sources/2026-08-11-云豹智能_横纵分析报告.md
- Updated: 云豹智能

## [2026-08-11] ingest | 云酷智能
- Disposition: New
- Raw: raw/sources/2026-08-11-yunku-intelligent-hv-analysis.md
- Updated: 云酷智能；云酷智能关键尽调问题

## [2026-08-11] ingest | 伊辛智能
- Disposition: New
- Raw: raw/sources/2026-08-11-伊辛智能_横纵分析报告.md
- Updated: 伊辛智能；伊辛智能关键尽调问题

## [2026-08-11] ingest | 光子芯力
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-光子芯力横纵分析报告.md
- Updated: 光子芯力；光子芯力关键尽调问题

## [2026-08-11] ingest | 光本位科技
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-光本位科技_横纵分析报告.md
- Updated: 光本位科技；光本位主体与商业化尽调

## [2026-08-11] ingest | 卓新溢泽
- Disposition: New
- Raw: raw/sources/2026-08-11-卓新溢泽_横纵分析报告.md
- Updated: 卓新溢泽；卓新溢泽关键尽调问题

## [2026-08-11] ingest | 启明光子
- Disposition: New
- Raw: raw/sources/2026-08-11-启明光子横纵分析报告.md
- Updated: 启明光子；启明光子关键尽调问题

## [2026-08-11] ingest | 基流科技（Infrawaves）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-基流科技_横纵分析报告.md
- Updated: 基流科技（Infrawaves）；基流科技主体与商业承接尽调

## [2026-08-11] ingest | 复睿微电子
- Disposition: New
- Raw: raw/sources/复睿微电子-横纵分析报告.md
- Updated: 复睿微电子；复睿微电子-主体连续性与经营状态

## [2026-08-11] ingest | 奇异摩尔
- Disposition: New
- Raw: raw/sources/2026-08-11-奇异摩尔_横纵分析报告.md
- Updated: 奇异摩尔

## [2026-08-11] ingest | 奇算光启
- Disposition: New
- Raw: raw/sources/2026-08-11-奇算光启_横纵分析报告.md
- Updated: 奇算光启；奇算光启关键尽调问题

## [2026-08-11] ingest | 尘禹半导体
- Disposition: New
- Raw: raw/sources/chenyu-hv-analysis-report.md
- Updated: 尘禹半导体

## [2026-08-11] ingest | 库瀚科技
- Disposition: New
- Raw: raw/sources/2026-08-11-库瀚科技_横纵分析报告.md
- Updated: 库瀚科技；库瀚科技关键尽调问题

## [2026-08-11] maintenance | 公司页与产业链 segment 归类收口
- Scope: 将 18 个已建公司页补入其现有主分类 segment；不改变公司页、Raw 或分类判断本身。
- Corrected: 曦智科技（Lightelligence）在 `1.6 Scale-out互联通信` 从正式次类型调整为条件性观察候选；其正式主/次分类仍为 `1.9` / `1.5`。
- Updated: `wiki/segments/1.4-其他AI芯片架构.md`、`1.5-Scale-up互联通信.md`、`1.6-Scale-out互联通信.md`、`1.9-光子光电计算芯片.md`、`1.10-存算一体近存计算芯片.md`、`2.2-AI算子开发.md`、`3.2-数据中心散热.md`、`3.3-算力中心集成.md`、`8-其他.md`；`wiki/index.md`。

## [2026-08-11] ingest | 思澈科技（SiFli）
- Disposition: New; Disputed
- Raw: raw/sources/思澈科技-横纵分析报告-验收版.md
- Updated: 思澈科技（SiFli）；思澈科技主体、IP与商业承接尽调；1.4 其他AI芯片架构

## [2026-08-11] ingest | 星云智联（Nebula Connection）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-星云智联_横纵分析报告.md
- Updated: 星云智联（Nebula Connection）；星云智联关键尽调问题；1.4 其他AI芯片架构

## [2026-08-11] ingest | 星融元（Asterfusion）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-星融元_横纵分析报告.md
- Updated: 星融元（Asterfusion）；星融元关键尽调问题；1.6 Scale-out互联通信；3.7 监控与健康管理软件

## [2026-08-11] ingest | 智子芯元
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-智子芯元_横纵分析报告.md
- Updated: 智子芯元；智子芯元关键尽调问题；2.2 AI算子开发、迁移与适配

## [2026-08-11] ingest | 松应科技（北京松应科技有限公司）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-松应科技_横纵分析报告.md
- Updated: 松应科技（北京松应科技有限公司）；松应科技关键尽调问题；8 其他

## [2026-08-11] ingest | 北京比特智路信息技术有限公司（比特智路）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-比特智路_横纵分析报告.md
- Updated: 北京比特智路信息技术有限公司（比特智路）；比特智路关键尽调问题；8 其他

## [2026-08-11] ingest | AI编译与算子优化同类公司名单
- Disposition: New
- Raw: raw/sources/2026-08-11-ai-compiler-operator-startup-search.md
- Updated: AI编译与算子优化同类公司名单
## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 卓新溢泽（上海卓新溢泽电子技术有限公司）
- Report: 横纵研究报告/卓新溢泽_横纵分析报告.md
- Classification: 主 8 其他（高性能 DC-DC／板级电源模块与电源管理）；无正式次分类

## [2026-08-11] ingest | 珠海泰为电子有限公司（泰为电子／Tai-Action）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-泰为电子_横纵分析报告_修订版.md
- Updated: 珠海泰为电子有限公司（泰为电子／Tai-Action）；泰为电子关键尽调问题；8 其他

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 华勤技术（华勤技术股份有限公司）
- Report: 横纵研究报告/华勤技术_横纵分析报告.md
- Classification: 主 3.3 算力中心集成；副 3.6 集群管理软件（低置信）；1.5 Scale-up互联通信（低—中置信）

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 一猫之下信息（一猫之下（长沙）信息技术有限公司）
- Report: 横纵研究报告/一猫之下信息_横纵分析报告.md
- Classification: 主 8 其他（早期算力硬件／本地部署候选）；3.3 仅条件性观察

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 易普集（易普集实业有限公司）
- Report: 横纵研究报告/易普集_横纵分析报告.md
- Classification: 主 3.3 算力中心集成（主体待穿透）；3.2 数据中心散热为条件性副类

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 京程智慧（浙江京程智慧科技有限公司）
- Report: 横纵研究报告/京程智慧_横纵分析报告.md
- Classification: 主 8 其他（数字化／工程集成候选）；3.3 算力中心集成仅条件性观察

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 山西秦云、山西秦能、燧弘华创
- Reports: 横纵研究报告/山西秦云_横纵分析报告.md；横纵研究报告/山西秦能（BCIGroup）_横纵分析报告.md；横纵研究报告/燧弘华创_横纵分析报告.md
- Classification: 山西秦云与山西秦能主 8 其他、3.3 条件性；燧弘华创主 3.3，4.1 仅待验证

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 清单第112—137项共26家公司，报告均整理至 `横纵研究报告/` 直接目录并完成 Raw 链接存在性检查。
- Classification: 按各报告末尾或结论段的主/次分类复核；对主体/IP未闭环标的保留 `8 其他` 或条件性分类，不将宣传升级为商业化事实。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 清单第159—174项共16家公司；本轮累计新增验收50家（83→133）。
- Classification: 北电数智至奇点科技按报告结论复核；资料不足的空间/区域云/量子候选暂归 `8 其他`；NVIDIA 与 AMD 主归 `1.1 GPGPU（AI GPU）`，分别附 `2.1/1.5` 与 `2.1/1.4` 次分类。

## [2026-08-11] ingest | 涌见（宁波）能源科技发展有限公司（涌见能源）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-涌见能源_横纵分析报告.md
- Updated: 涌见（宁波）能源科技发展有限公司（涌见能源）；涌见能源关键尽调问题；8 其他

## [2026-08-11] ingest | 清昴智能科技（北京）有限公司（清昴科技）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-清昴科技_横纵分析报告.md
- Updated: 清昴智能科技（北京）有限公司（清昴科技）；清昴科技关键尽调问题；2.2 AI算子开发、迁移与适配；5.2 推理框架；AI编译与算子优化同类公司名单

## [2026-08-11] ingest | 陕西源杰半导体科技股份有限公司（源杰科技）
- Disposition: New
- Raw: raw/sources/2026-08-11-源杰科技_横纵分析报告.md
- Updated: 陕西源杰半导体科技股份有限公司（源杰科技）；源杰科技关键尽调问题；3.1 光通信

## [2026-08-11] ingest | 矩量光启（SQ Computing）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-矩量光启_横纵分析报告.md
- Updated: 矩量光启（SQ Computing）；矩量光启关键尽调问题；8 其他

## [2026-08-11] ingest | 篆芯半导体（苏州）有限公司（篆芯半导体／Zenosic）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-篆芯半导体_横纵分析报告.md
- Updated: 篆芯半导体（苏州）有限公司（篆芯半导体／Zenosic）；篆芯半导体关键尽调问题；8 其他

## [2026-08-11] ingest | 芯启源
- Disposition: New; Disputed
- Raw: raw/sources/芯启源_横纵分析报告.md
- Updated: 芯启源；芯启源关键尽调问题；1.4 其他AI芯片架构；1.6 Scale-out互联通信

## [2026-08-11] ingest | 合肥芯明智能科技有限公司（芯明）
- Disposition: New; Disputed
- Raw: raw/sources/芯明智能_横纵分析报告.md
- Updated: 合肥芯明智能科技有限公司（芯明）；芯明智能关键尽调问题；1.3 NPU（ASIC）

## [2026-08-11] ingest | 深圳芯网动力科技有限公司（芯网动力）
- Disposition: New
- Raw: raw/sources/2026-08-11-芯网动力_横纵分析报告.md
- Updated: 深圳芯网动力科技有限公司（芯网动力）；芯网动力关键尽调问题；1.4 其他AI芯片架构；1.6 Scale-out互联通信

## [2026-08-11] ingest | 芯速联光电科技（杭州）有限公司（芯速联科技）
- Disposition: New
- Raw: raw/sources/2026-08-11-芯速联科技_横纵分析报告.md
- Updated: 芯速联光电科技（杭州）有限公司（芯速联科技）；芯速联科技关键尽调问题；3.1 光通信

## [2026-08-11] ingest | 深圳市英维克科技股份有限公司（英维克）
- Disposition: New
- Raw: raw/sources/2026-08-11-英维克_横纵分析报告.md
- Updated: 深圳市英维克科技股份有限公司（英维克）；英维克关键尽调问题；3.2 数据中心散热

## [2026-08-11] ingest | 北京钛芯智冷科技有限公司（钛芯智冷／TYSON）
- Disposition: New; Disputed
- Raw: raw/sources/钛芯智冷_横纵分析报告.md
- Updated: 北京钛芯智冷科技有限公司（钛芯智冷／TYSON）；钛芯智冷主体、IP与商业承接尽调；3.2 数据中心散热

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 海光信息技术股份有限公司（海光信息）；Intel Corporation（Intel）；Google LLC（Google）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Google LLC（Google）
- Report: 横纵研究报告/Google_横纵分析报告.md
- Classification: 主 1.2 TPU（ASIC）；副 2.1 加速计算平台（CUDA-like）
- Validation: 主体/资本口径、TPU 与 Google Cloud 收入边界、平台准入证据、来源表、冲突项与机器人行动建议均已复核。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 海光信息技术股份有限公司（海光信息）；Intel Corporation（Intel）
- Reports: 横纵研究报告/海光信息_横纵分析报告.md；横纵研究报告/Intel_横纵分析报告.md
- Classification: 海光信息主 1.1 GPGPU（AI GPU），2.1 仅待验证；Intel 主 1.4 其他AI芯片架构，副 2.1 加速计算平台（CUDA-like）。
- Validation: 逐项复核融资/资本事件、合作网络拆分、来源和未确认项；Intel 的重复分类段落已退回校正。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 平头哥半导体有限公司（阿里巴巴／平头哥）；中科寒武纪科技股份有限公司（寒武纪）；华为技术有限公司（华为昇腾）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 华为技术有限公司（华为昇腾）
- Report: 横纵研究报告/华为昇腾_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；副 2.1 加速计算平台（CUDA-like）。
- Validation: CANN 运行时、编译/算子、框架后端、HCCL、工具与开发者入口满足平台门槛；独立营收、订单、机载控制与供给数据继续保留为未确认事项。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 平头哥半导体有限公司（阿里巴巴／平头哥）；中科寒武纪科技股份有限公司（寒武纪）；深圳云天励飞技术股份有限公司（云天励飞）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 平头哥半导体有限公司（阿里巴巴／平头哥）
- Report: 横纵研究报告/阿里巴巴平头哥_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 含光内部推理 ASIC、玄铁 RISC-V 工具链和云内系统能力已分开取证；未把玄铁工具链外推为含光平台或把集团内部应用写为外部订单。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 中科寒武纪科技股份有限公司（寒武纪）；深圳云天励飞技术股份有限公司（云天励飞）；Altera Corporation（Altera）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 深圳云天励飞技术股份有限公司（云天励飞）
- Report: 横纵研究报告/云天励飞_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 将已商业化视觉 NPU、算力服务长约及机器人/云端研发路线分开；因 DETVM 与机器人量产证据不足，不设 2.1 或其他次分类。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 中科寒武纪科技股份有限公司（寒武纪）；Altera Corporation（Altera）；Groq LLC（Groq）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 中科寒武纪科技股份有限公司（寒武纪）
- Report: 横纵研究报告/寒武纪_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；副 2.1 加速计算平台（CUDA-like）。
- Validation: NeuWare 的运行时、BANG/编译器、算子/通信库、框架后端、诊断与开发者组件满足平台门槛；客户集中、库存和供应链约束均保留为反证。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Altera Corporation（Altera）；Groq LLC（Groq）；Graphcore Limited（Graphcore）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Altera Corporation（Altera）
- Report: 横纵研究报告/Altera_横纵分析报告.md
- Classification: 主 1.4 其他AI芯片架构（FPGA）；不设正式次分类。
- Validation: 2015 并购与 2025 控制权交易的估值口径已分开；不把 Quartus 当作 2.1 平台，也不把 Intel 历史关系写成当前供货/支持承诺。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Groq LLC（Groq）；Graphcore Limited（Graphcore）；瑞芯微电子股份有限公司（瑞芯微／Rockchip）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Groq LLC（Groq）
- Report: 横纵研究报告/Groq_横纵分析报告.md
- Classification: 主 1.4 其他AI芯片架构（LPU）；不设正式次分类。
- Validation: 将 LPU/GroqCloud 的推理能力与训练平台分开；NVIDIA 非独占许可、沙特承诺与云业务单位经济性作为 P0 未解问题保留。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Graphcore Limited（Graphcore）；瑞芯微电子股份有限公司（瑞芯微／Rockchip）；Horizon Robotics（地平线）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Graphcore Limited（Graphcore）
- Report: 横纵研究报告/Graphcore_横纵分析报告.md
- Classification: 主 1.4 其他AI芯片架构（IPU）；副 2.1 加速计算平台（CUDA-like）。
- Validation: 复核了 SoftBank 收购后组织状态、融资金额口径冲突、IPU/POD 与 Poplar 软件栈的边界、当前外部支持可得性，以及机器人工作负载结论的证据限制；未将历史云合作或示例目录误写为当前采购能力。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Horizon Robotics（地平线）；Black Sesame International Holding Limited（黑芝麻智能）；芯原微电子（上海）股份有限公司（芯原股份／VeriSilicon）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 瑞芯微电子股份有限公司（瑞芯微／Rockchip）
- Report: 横纵研究报告/瑞芯微Rockchip_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 核对了 SoC 产品规格、RKNN 的模型转换/运行时边界、上市融资与控制权口径、端侧 AIoT 财务周期以及机器人工作负载限制；RKNN 未满足 2.1 平台准入硬条件，未被夸大为 CUDA-like 平台。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Black Sesame International Holding Limited（黑芝麻智能）；芯原微电子（上海）股份有限公司（芯原股份／VeriSilicon）；苏州盛科通信股份有限公司（盛科通信／Centec Networks）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Horizon Robotics（地平线）
- Report: 横纵研究报告/地平线HorizonRobotics_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 以审计年报复核汽车与非车收入、BPU/征程产品边界、CARIAD 资本与合作关系、HSD 毛利变化及 D-Robotics 关联边界；未将车规出货、联合研究或开发者套件夸大为人形机器人订单、实时控制或 VLA 能力。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Black Sesame International Holding Limited（黑芝麻智能）；苏州盛科通信股份有限公司（盛科通信／Centec Networks）；长沙景嘉微电子股份有限公司（景嘉微／Jingjia Micro）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 芯原微电子（上海）股份有限公司（芯原股份／VeriSilicon）
- Report: 横纵研究报告/芯原股份VeriSilicon_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC，NPU IP/SiPaaS）；不设正式次分类。
- Validation: 明确区分 NPU/GPU/ISP IP 授权与 SiPaaS 定制服务，同客户芯片的累计出货没有被写成芯原标准芯片出货或机器人订单；IP 软件入口亦不满足 2.1 平台准入证据。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 苏州盛科通信股份有限公司（盛科通信／Centec Networks）；长沙景嘉微电子股份有限公司（景嘉微／Jingjia Micro）；Amazon Web Services, Inc.（AWS）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Black Sesame International Holding Limited（黑芝麻智能）
- Report: 横纵研究报告/黑芝麻智能_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 以港交所招股书、年报、业绩公告和收购完成公告复核车规 SoC、具身 AI 及方案收入、A2000 量产预期与易创智芯并表边界；未将机器人合作清单、适配或路线图写成已验证的人形订单、PPA 或 VLA 主控能力。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 长沙景嘉微电子股份有限公司（景嘉微／Jingjia Micro）；Amazon Web Services, Inc.（AWS）；Broadcom Inc.（Broadcom）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 苏州盛科通信股份有限公司（盛科通信／Centec Networks）
- Report: 横纵研究报告/盛科通信CentecNetworks_横纵分析报告.md
- Classification: 主 1.6 Scale-out互联通信；不设正式次分类。
- Validation: 用招股书与年报复核交换 ASIC、芯片模组与网络软件的收入承载、设备商供应链、股权和高端 800G/25.6Tbps 产品的认证风险；未将产品定位、关联销售或行业现网应用夸大为 AI 集群订单或已验证 Fabric 份额。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Amazon Web Services, Inc.（AWS）；Broadcom Inc.（Broadcom）；Astera Labs, Inc.（Astera Labs）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 长沙景嘉微电子股份有限公司（景嘉微／Jingjia Micro）
- Report: 横纵研究报告/景嘉微（JingjiaMicro）_横纵分析报告.md
- Classification: 主 1.8 图形GPU（桌面／工作站／专业可视化）；不设正式次分类。
- Validation: 以年报、半年报与三季报复核图形显控/GPU 的收入承载、JM11 的推广状态、定增资金使用、专用客户保密边界和诚恒微股权/产品不确定性；未将适配、募投、涉密市场线索或边端 AI 研发写成训练 GPU、机器人 NPU 或可验证订单。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Broadcom Inc.（Broadcom）；Astera Labs, Inc.（Astera Labs）；SK hynix Inc.（SK hynix）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Amazon Web Services, Inc.（AWS）
- Report: 横纵研究报告/Amazon_Web_Services_AWS_横纵分析报告.md
- Classification: 主 8 其他（超大规模云/AI算力服务）；副 1.3 NPU（ASIC，Trainium/Inferentia）及 2.1 加速计算平台（Neuron）。
- Validation: 复核并拆分 Amazon 母公司、AWS 报告分部、Annapurna Labs 与 Anthropic 的资本/组织/商业关系；AWS 分部收入、集团 CapEx、AI ASIC 实例服务和 Anthropic 投资均未互相错记。EFA/NeuronLink 未被误列为独立 Scale-up 互联收入主线。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Broadcom Inc.（Broadcom）；SK hynix Inc.（SK hynix）；Micron Technology, Inc.（Micron Technology）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Astera Labs, Inc.（Astera Labs）
- Report: 横纵研究报告/AsteraLabs_横纵分析报告.md
- Classification: 主 1.5 Scale-up互联通信；不设正式次分类。
- Validation: 复核 PCIe/CXL/机架内 fabric 产品、COSMOS 软件、Scorpio 的量产节奏、客户/代工集中度与 aiXscale 收购边界；未把生态演示、design win、标准参与或光互连研发写成量产订单、完整 Scale-out 网络或光计算业务。

## [2026-08-11] ingest | Astera Labs
- Disposition: New
- Raw: raw/sources/2026-08-11-astera-labs-hv-analysis-report.md
- Updated: 1.5 Scale-up互联通信

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: SK hynix Inc.（SK hynix）；Micron Technology, Inc.（Micron Technology）；Samsung Electronics Co., Ltd.（三星电子）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Broadcom Inc.（Broadcom）
- Report: 横纵研究报告/Broadcom_横纵分析报告.md
- Classification: 主 1.6 Scale-out互联通信；副 1.5 Scale-up互联通信。
- Validation: 复核 Ethernet 交换/路由、NIC/PHY/光部件与定制硅的产品边界、客户集中度、VMware 并入后的软件分部以及 AI 半导体收入披露口径；未把客户自研 XPU、媒体客户猜测或 VCF 收入误写为可采购加速器订单、独立 AI 收入或 CUDA-like 平台。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Micron Technology, Inc.（Micron Technology）；Samsung Electronics Co., Ltd.（三星电子）；中际旭创股份有限公司（中际旭创／Zhongji Innolight）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: SK hynix Inc.（SK hynix）
- Report: 横纵研究报告/SK_hynix_横纵分析报告.md
- Classification: 主 1.7 HBM；不设正式次分类。
- Validation: 复核 HBM3/HBM3E 的量产交付、HBM4/4E 的量产准备与送样边界、NVIDIA 历史供货、TSMC/Purdue 协作、Solidigm 并购及 PIM 研发状态；未将客户认证、研发合作、产能计划或样品写成确定份额、订单或近存计算主业。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Micron Technology, Inc.（Micron Technology）；中际旭创股份有限公司（中际旭创／Zhongji Innolight）；成都新易盛通信技术股份有限公司（新易盛／Eoptolink）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Samsung Electronics Co., Ltd.（三星电子）
- Report: 横纵研究报告/三星电子SamsungElectronics_横纵分析报告.md
- Classification: 主 1.7 HBM；不设正式次分类。
- Validation: 拆分了上市主体、三星集团及 DS/Memory/HBM 财务口径，复核 HBM3E/HBM4 的规格、2025 年切换压力、2026 年对 NVIDIA Vera Rubin 的 HBM4 销售与 HBM4E 送样；未将集团收入、资格/样品或 HBM-PIM 研发写成 HBM 订单、独立收入或近存计算主业。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 中际旭创股份有限公司（中际旭创／Zhongji Innolight）；成都新易盛通信技术股份有限公司（新易盛／Eoptolink）；武汉光迅科技股份有限公司（光迅科技／Accelink Technologies）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Micron Technology, Inc.（Micron Technology）
- Report: 横纵研究报告/MicronTechnology_横纵分析报告.md
- Classification: 主 1.7 HBM；不设正式次分类。
- Validation: 复核 HBM3E 与 HBM4 的量产/送样层级、先进封装与晶圆产能扩张、战略客户承诺、CHIPS 激励和制造地域风险；未将未具名客户、客户 deposits、补贴或产能计划误写为 HBM 订单、收入、份额或确定保供。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 成都新易盛通信技术股份有限公司（新易盛／Eoptolink）；武汉光迅科技股份有限公司（光迅科技／Accelink Technologies）；Vertiv Holdings Co（Vertiv）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 中际旭创股份有限公司（中际旭创／Zhongji Innolight）
- Report: 横纵研究报告/中际旭创_横纵分析报告.md
- Classification: 主 3.1 光通信；不设正式次分类。
- Validation: 用经审计年报复核高速光模块收入、销量、毛利、客户集中、速率产品组合和海外组织边界；未将 1.6T/3.2T 展示、生态协作或匿名订单误写为分速率收入、具名客户或完整网络交付能力。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: 武汉光迅科技股份有限公司（光迅科技／Accelink Technologies）；Vertiv Holdings Co（Vertiv）；Super Micro Computer, Inc.（Supermicro）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 成都新易盛通信技术股份有限公司（新易盛／Eoptolink）
- Report: 横纵研究报告/新易盛（Eoptolink）_横纵分析报告.md
- Classification: 主 3.1 光通信；不设正式次分类。
- Validation: 复核光互联产品的收入/销量、800G/1.6T 量产交付、前沿 NPO/XPO/OCS 产品状态、泰国制造与 Alpine 组织变更、控制人监管处罚和客户集中度；未将展示、标准参与、技术合作或可转债预案写成订单、成熟光网络业务或已到位融资。

## [2026-08-11] maintenance | 横纵报告任务派发
- In progress: Vertiv Holdings Co（Vertiv）；Super Micro Computer, Inc.（Supermicro）；浪潮电子信息产业股份有限公司（浪潮信息／Inspur Electronic Information）
- Delivery: 横纵研究报告/ 直接目录 Markdown；待主代理完成证据、分类与结构验收后再更新完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 武汉光迅科技股份有限公司（光迅科技／Accelink Technologies）
- Report: 横纵研究报告/光迅科技AccelinkTechnologies_横纵分析报告.md
- Classification: 主 3.1 光通信；不设正式次分类。
- Validation: 以经审计年报和发行文件复核器件、模块、子系统的收入承载、数通产品分组、1.6T 导入状态、两轮定增、集团边界与客户集中度；未将高速产品目录、互动问答、集团资源、产业协作或研发路线夸大为分速率收入、具名订单、完整网络交付或光计算业务。

## [2026-08-11] ingest | 苏州长光华芯光电技术股份有限公司（长光华芯）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-长光华芯_横纵分析报告.md
- Updated: 苏州长光华芯光电技术股份有限公司（长光华芯）；长光华芯关键尽调问题；3.1 光通信

## [2026-08-11] maintenance | 横纵报告任务清单主体核查与末尾追加
- Added at list end: 澎峰科技、清程极智、Moreh
- Entity verification: 澎峰（北京）科技有限公司；北京清程极智科技有限公司；Moreh, Inc.（美国特拉华州注册）
- Raw: raw/sources/2026-08-11-澎峰科技工商主体核查.md；raw/sources/2026-08-09-清程极智_公开资料摘录.md；raw/sources/2026-08-11-Moreh工商主体核查.md

## [2026-08-11] ingest | 飞诺门阵（北京）科技有限公司
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-飞诺门阵_横纵分析报告.md
- Updated: 飞诺门阵（北京）科技有限公司；飞诺门阵关键尽调问题；8 其他

## [2026-08-11] ingest | no material: raw/sources/2026-08-11-光子光电计算芯片横纵分析报告-验收版.md
- Disposition: No material

## [2026-08-11] ingest | no material: raw/sources/2026-08-11-存算一体近存计算CIM-PIM横纵分析报告-验收版.md
- Disposition: No material

## [2026-08-11] maintenance | 横纵研究报告验收版导入批次收口
- Reconciled: 38 篇公司报告均已完成 Raw、公司页与导入日志证据链；追踪清单的汇总更新为已导入 75 家、本批次待导入 0 家。
- Technical: 2 篇独立技术报告已保留验收版 Raw；其正文均与 2026-08-07 已入库原文一致，按 No material 记录，未重复编译。
- Corrected: 补齐长光华芯已完成导入的追踪勾选、Raw 和公司页链接，并将本批次小节收口为已完成状态。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Vertiv Holdings Co（Vertiv）
- Report: 横纵研究报告/Vertiv_横纵分析报告.md
- Classification: 主 3.2 数据中心散热；副 3.3 算力中心集成。
- Validation: 以 SEC 年报、10-Q 和 8-K 复核产品与收入边界、订单积压、E+I/Great Lakes/PurgeRite 收购及 NVIDIA 的架构协作；未将积压、行业示例、参考架构、并购协同或前瞻指引写成客户订单、AI 收入或已实现交付。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Super Micro Computer, Inc.（Supermicro）
- Report: 横纵研究报告/Supermicro_横纵分析报告.md
- Classification: 主 3.3 算力中心集成；副 3.2 数据中心散热。
- Validation: 以 SEC 年报、10-Q 和可转债 8-K 复核服务器/存储收入承载、液冷产品边界、资本事件、客户集中与内控缺陷；未将 NVIDIA/AMD/Intel 的适配与开发协作、未具名客户、关联方或 Lambda 合同写成客户订单、配额、排他合作或独立软件/液冷收入。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 浪潮电子信息产业股份有限公司（浪潮信息／Inspur Electronic Information）
- Report: 横纵研究报告/浪潮信息InspurElectronicInformation_横纵分析报告.md
- Classification: 主 3.3 算力中心集成；副 3.2 数据中心散热。
- Validation: 以年报、季报、历史发行公告及 Federal Register 复核上市主体/浪潮集团边界、服务器收入、客户集中、液冷产品和资本事件；未将集团关联、Entity List 列名、生态伙伴、产品适配、市场排名转述或案例写成上市主体的客户订单、芯片供给或独立液冷收入。
- In progress: 曙光信息产业股份有限公司（中科曙光／Sugon）；超聚变数字技术有限公司（超聚变数字技术／xFusion）；北京海天瑞声科技股份有限公司（海天瑞声／Speechocean）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 曙光信息产业股份有限公司（中科曙光／Sugon）
- Report: 横纵研究报告/中科曙光Sugon_横纵分析报告.md
- Classification: 主 3.3 算力中心集成；副 3.2 数据中心散热。
- Validation: 以公司年报、季报、重组公告与 Federal Register 复核上市主体、中科院计算所控制权、海光联营关系、客户集中、液冷路线与重组状态；未将海光业绩/产能、2019 年历史关联、Entity List、项目中标、技术平台或预期商业化写成中科曙光当前的芯片收入、客户订单或已完成重组。
- In progress: 超聚变数字技术有限公司（超聚变数字技术／xFusion）；北京海天瑞声科技股份有限公司（海天瑞声／Speechocean）；北京数据堂科技股份有限公司（数据堂／Datatang）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 超聚变数字技术股份有限公司（超聚变数字技术／xFusion；由任务清单所列有限公司整体变更而来）
- Report: 横纵研究报告/超聚变xFusion_横纵分析报告.md
- Classification: 主 3.3 算力中心集成；副 3.2 数据中心散热。
- Validation: 以深交所招股书、审计报告、问询回复及项目状态复核主体沿革、实际控制人、服务器收入、液冷产品、客户/供应集中、外协制造和 IPO 状态；未将华为人才来源、生态/联创实验室、注册资本、历史股权转让、累计节点或拟募资写成当前控制权、客户订单、独占供应或已到账融资。
- In progress: 北京海天瑞声科技股份有限公司（海天瑞声／Speechocean）；北京数据堂科技股份有限公司（数据堂／Datatang）；CoreWeave, Inc.（CoreWeave）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京海天瑞声科技股份有限公司（海天瑞声／Speechocean）
- Report: 横纵研究报告/海天瑞声Speechocean_横纵分析报告.md
- Classification: 主 7 数据服务；不设正式次分类。
- Validation: 以年报、季报、招股书及定增终止公告复核数据产品/定制服务/应用服务的收入边界、训练数据权属、客户集中、历史融资与数据合规口径；未将具身智能行业覆盖、客户 logo、数据产品数、语种数、定增预案或控制制度写成机器人订单、可训练权利、已建项目或模型效果。
- In progress: 北京数据堂科技股份有限公司（数据堂／Datatang）；CoreWeave, Inc.（CoreWeave）；北京第四范式智能技术股份有限公司（第四范式／4Paradigm）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: CoreWeave, Inc.（CoreWeave）
- Report: 横纵研究报告/CoreWeave_横纵分析报告.md
- Classification: 主 8 其他（GPU 云／AI 算力租赁）；不设正式次分类。
- Validation: 以 SEC 年报、季报、招股书和 8-K 复核云服务收入、RPO、客户集中、已投运/签约电力、债务与融资承诺；未将客户 MSA/RPO、签约电力、NVIDIA 投资、贷款承诺或 IPO 募资写成即时可用 GPU、已确认收入、供货配额或无条件现金。
- In progress: 北京数据堂科技股份有限公司（数据堂／Datatang）；北京第四范式智能技术股份有限公司（第四范式／4Paradigm）；北京青云科技股份有限公司（青云科技／QingCloud）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 数据堂（北京）科技股份有限公司（数据堂／Datatang）
- Report: 横纵研究报告/数据堂Datatang_横纵分析报告.md
- Classification: 主 7 数据服务；不设正式次分类。
- Validation: 以年报、年报问询回复与新三板发行资料复核收入结构、数据资源账面及权属控制、客户/供应集中、资本事件和具身智能投入；未将具身场地/设备宣传、匿名案例、合作报道、会计存货或数据安全制度写成具身订单、可训练许可、产能、模型效果或可无条件再授权的数据资产。
- In progress: 北京第四范式智能技术股份有限公司（第四范式／4Paradigm）；北京青云科技股份有限公司（青云科技／QingCloud）；Datadog, Inc.（Datadog）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京第四范式智能技术股份有限公司（第四范式／4Paradigm）
- Report: 横纵研究报告/第四范式4Paradigm_横纵分析报告.md
- Classification: 主 5.4 推理应用编排与知识库框架；副 5.1 训练框架、5.2 推理框架。
- Validation: 以港交所年报、业绩公告、招股书与公开产品材料复核 AI Platform/API/Agentic AI 的收入口径、资本事件和平台功能；未将平台收入写为纯 SaaS ARR、将 HAMi/vGPU 写为跨厂商异构调度、将 Agent/API/模型目录写为机器人控制、基础模型收入或机器人客户订单。
- In progress: 北京青云科技股份有限公司（青云科技／QingCloud）；Datadog, Inc.（Datadog）；北京灵汐科技有限公司（灵汐科技／Lynxi）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Datadog, Inc.（Datadog）
- Report: 横纵研究报告/Datadog_横纵分析报告.md
- Classification: 主 3.7 监控与健康管理软件；不设正式次分类。
- Validation: 以 SEC 年报、季报、8-K 和招股书复核遥测/可观测性产品、收入、客户集中与资本/收购口径；未将 Kubernetes 监控、Incident/Workflow、AI Agent、集成目录或云安全业务写成集群控制、容器/作业调度、已验证自治运维或机器人端功能安全能力。
- In progress: 北京青云科技股份有限公司（青云科技／QingCloud）；北京灵汐科技有限公司（灵汐科技／Lynxi）；深圳地瓜机器人有限公司（地瓜机器人／D-Robotics）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京青云科技股份有限公司（青云科技／QingCloud）
- Report: 横纵研究报告/青云科技QingCloud_横纵分析报告.md
- Classification: 主 3.6 集群管理软件；副 3.4 容器化软件、3.5 调度与编排软件。
- Validation: 以年报、季报、招股书、监管问询回复、产品资料和代码仓复核企业云/AI 云收入、KubeSphere/QKE 产品边界、融资租赁和子公司资本事项；未将开源版本、产品适配、模型 Token 上架、GPU 融资、案例或跨云/跨芯主张写成独立收入、客户订单、2.1 平台、4.1/4.4 调度或可用产能。
- In progress: 北京灵汐科技有限公司（灵汐科技／Lynxi）；深圳地瓜机器人有限公司（地瓜机器人／D-Robotics）；Cerebras Systems Inc.（Cerebras Systems）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 深圳地瓜机器人有限公司（地瓜机器人／D-Robotics）
- Report: 横纵研究报告/地瓜机器人DRobotics_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 以公司产品/开发者资料及权威媒体报道复核 BPU SoC、RDK 套件、工具链、历史地平线关系与融资；未将历史同源、官网量产/生态声明、S100/S600 展示、VLA 适配或开发工具写成地平线资产、具名订单/收入、功能安全控制、CUDA-like 平台或已成熟云服务。
- In progress: 北京灵汐科技有限公司（灵汐科技／Lynxi）；Cerebras Systems Inc.（Cerebras Systems）；Tenstorrent Holdings, Inc.（Tenstorrent）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Cerebras Systems Inc.（Cerebras Systems）
- Report: 横纵研究报告/CerebrasSystems_横纵分析报告.md
- Classification: 主 1.4 其他 AI 芯片架构（Wafer-Scale Engine）；不设正式次分类。
- Validation: 以 SEC 招股书、10-Q、8-K、历史 S-1 与公司融资公告复核 WSE/系统/云服务、合同/RPO、客户集中、融资与上市状态；未将多系统集群、软件栈、OpenAI/AWS 合同、签约 MW、客户关系或芯片性能主张写成独立 Scale-out 网络、CUDA-like 平台、当期收入、通用可交付容量或无条件供货。
- In progress: 北京灵汐科技有限公司（灵汐科技／Lynxi）；Tenstorrent Holdings, Inc.（Tenstorrent）；Axelera AI B.V.（Axelera AI）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京灵汐科技有限公司（灵汐科技／Lynxi）
- Report: 横纵研究报告/灵汐科技Lynxi_横纵分析报告.md
- Classification: 主 1.4 其他 AI 芯片架构（类脑／神经形态）；不设正式次分类。
- Validation: 以公司产品/软件资料、Nature 论文、公司新闻和媒体融资报道复核 DNN/SNN 混合架构、KA200 产品、感知研发、融资与研究渊源；未将 Tianjic 论文、感知样片、公司量产表述、应用场景、研发合作或 LynOS 工具写成完整 IP 承继、客户订单/出货、量产感知产品、2.1 平台或人形机器人主控能力。
- In progress: Tenstorrent Holdings, Inc.（Tenstorrent）；Axelera AI B.V.（Axelera AI）；Hailo Technologies Ltd.（Hailo）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Tenstorrent Holdings, Inc.（Tenstorrent）
- Report: 横纵研究报告/Tenstorrent_横纵分析报告.md
- Classification: 主 1.4 其他AI芯片架构（Tensix 专用 AI 加速器／RISC-V／chiplet）；不设 2.1 正式次分类。
- Validation: 以公司融资、开发产品、RISC-V/chiplet 合作、收购、文档及开源仓库复核资金、硬件、软件与合作边界；其软件虽有外部可编程和开发者产品证据，但缺少主流框架训练或后训练工作负载的公开证据，未满足 2.1 的工作负载广度硬条件，故不因评分而越过准入门槛；未将 closed deals、投资方、开发套件、合作或系统主张写成确认收入、客户订单、独占供货或已验证平台规模。
- Dispatched: Lightmatter, Inc.（Lightmatter）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Axelera AI B.V.（Axelera AI）
- Report: 横纵研究报告/AxeleraAI_横纵分析报告.md
- Classification: 主 1.10 存算一体/近存计算芯片（SRAM 数字存内计算 D-IMC）；不设正式次分类。
- Validation: 以公司技术、产品、开发者文档、融资、渠道和欧盟项目资料复核 D-IMC、Metis、Voyager、Europa/Titania 路线和融资口径；未将 SDK、转换流水线或厂商性能资料写成 CUDA-like 平台、独立基准胜负、量产客户收入或机器人部署。Europa 仍按发布/计划交付、Titania 按研发路线记录。
- Dispatched: Ayar Labs, Inc.（Ayar Labs）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Hailo Technologies Ltd.（Hailo）
- Report: 横纵研究报告/Hailo_横纵分析报告.md
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。
- Validation: 以公司芯片/软件资料、融资公告、Raspberry Pi 的可购买产品与汽车设计导入资料复核 Hailo-8/15/10H、工具链、融资与合作边界；未将公司部署主张、Raspberry Pi 产品、汽车计划量产、LLM/VLM 定位或机器人应用页写成 Hailo 收入、具名人形客户、已量产订单、VLA 主控或 2.1 平台。
- Dispatched: Xscape Photonics Inc.（Xscape Photonics）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Ayar Labs, Inc.（Ayar Labs）
- Report: 横纵研究报告/AyarLabs_横纵分析报告.md
- Classification: 主 1.5 Scale-up互联通信；不设正式次分类。
- Validation: 以公司产品、融资、制造/光源、封装和生态合作资料复核 TeraPHY、SuperNova、Series C/D/E 与合作边界；未将已发货主张、投资方、NVLink Fusion 生态、GUC/Wiwynn 联合参考架构或跨机架能力写成具名订单、确认收入、NVIDIA 设计导入、已售机架或完整 Scale-out 网络。产品为封装级光 I/O，不归入光计算或独立光通信系统。
- Dispatched: 趋动科技（VirtAI Tech；主体待核验）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Lightmatter, Inc.（Lightmatter）
- Report: 横纵研究报告/Lightmatter_横纵分析报告.md
- Classification: 主 1.5 Scale-up互联通信；不设正式次分类。
- Validation: 以公司融资、产品、foundry/OSAT、封装及生态合作资料复核公司从光计算转向 Passage/Guide 光 I/O 的商业边界；未将光计算研究、GF/OSAT 合作、NVIDIA NVLink Fusion 生态、技术规格或 deployment 表述写成光计算收入、已量产良率、NVIDIA 订单、客户合同、完整 Scale-out 网络或独立光通信系统。
- Dispatched: 北京九章云极科技股份有限公司（九章云极／DataCanvas）。

## [2026-08-11] ingest | Lightmatter
- Disposition: New
- Raw: raw/sources/2026-08-11-lightmatter-横纵分析报告.md

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Xscape Photonics Inc.（Xscape Photonics）
- Report: 横纵研究报告/XscapePhotonics_横纵分析报告.md
- Classification: 主 1.5 Scale-up互联通信；副 3.1 光通信。
- Validation: 以公司融资、技术、产品、团队与 Columbia 资料复核多波长硅光激光源、EagleX/FalconX 评估/模块形态和融资边界；未将投资方、ARPA-E 入选、产品适用场景、性能主张或 OIF-compatible 设计写成订单、认证、规模量产、完整 Scale-out 网络或光计算能力。3.1 次分类只反映已公开的光通信物理层模块形态。
- Dispatched: 派欧云计算（上海）有限公司（派欧云／PPIO）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京九章云极科技股份有限公司（九章云极／DataCanvas）
- Report: 横纵研究报告/九章云极DataCanvas_横纵分析报告.md
- Classification: 主 4.1 跨厂商训推算力调度平台（中等置信）；不设正式次分类。
- Validation: 以官网产品/新闻、公开融资报道和高校合作资料复核 Alaya NeW OS、CCI、AI Factory、DCU/Token 路线、主体沿革与融资不确定性；未将异构 GPU/NPU、多中心、客户/场景、成本/利用率或产业基金口径写成独立软件收入、外部多来源算力资源池化与控制面、可审计订单、性能或已交割融资。公司主体承继与独立产品化仍为高优先级尽调事项。
- Dispatched: Inferact（主体待核验）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 北京趋动科技有限公司（趋动科技／VirtAI Tech；中高置信，仍须工商终核）
- Report: 横纵研究报告/VirtAITech_横纵分析报告.md
- Classification: 主 3.5 调度与编排软件；副 3.6 集群管理软件。
- Validation: 以 OrionX 白皮书、产品/公司页面、融资报道、云服务页面及项目新闻复核 GPU 池化、调度、控制面、融资和主体线索；未将国产/异构主张、生态/项目名单、旧性能数字或云服务写成跨厂商 XPU 生产矩阵、4.1/4.4 平台、客户合同、收入或可复制性能。主体、IP 和当前多 XPU 支持仍是尽调事项。
- Dispatched: RadixArk, Inc.（RadixArk）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Inferact（主体待核验）
- Report: 横纵研究报告/Inferact_横纵分析报告.md
- Classification: 主 5.2 推理框架（低—中置信）；不设正式次分类。
- Validation: 以 Inferact/a16z 公告、vLLM 开源仓库与文档、论文及公开登记查询复核 vLLM 技术谱系、品牌层融资和产品/主体边界；未将 vLLM 社区采用、实验性 PD 分离、多硬件后端、投资人或品牌融资写成 Inferact 法人资产、客户/收入、生产 PD 服务或跨 XPU 调度产品。法人与开源/商标/IP 权属为交易前置尽调项。
- Dispatched: Anyscale, Inc.（Anyscale）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 派欧云计算（上海）有限公司（派欧云／PPIO）
- Report: 横纵研究报告/派欧云PPIO_横纵分析报告.md
- Classification: 主 8 其他（分布式边缘云／GPU 云／AI 云服务）；不设正式次分类。
- Validation: 以服务条款、产品页、官网资料及媒体转述的上市文件复核边缘云、GPU 容器、Serverless、模型 API、融资与资源运营边界；未将节点/用户宣传、模型目录、资源聚合、异构说法、铁塔案例或上市申请写成自有 GPU、4.4 多厂商资源池、独立调度软件、已完成 IPO、订单或收入。云服务的单位经济与资源权属仍需穿透验证。
- Dispatched: Fireworks.ai, Inc.（Fireworks AI）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: RadixArk, Inc.（RadixArk）
- Report: 横纵研究报告/RadixArk_横纵分析报告.md
- Classification: 主 5.2 推理框架；副 4.2 推理PD分离、5.3 分布式训练工具。
- Validation: 以公司启动/融资公告、SGLang/Miles 文档与仓库、论文和媒体报道复核公司化、1 亿美元种子轮、SGLang 推理、PD 分离及 Miles 后训练能力；未将匿名天使轮、开源采用、投资人、托管线索、硬件支持或 PD 文档写成审计收入、客户订单、4.3 跨 XPU 调度、生产 SLA 或完整 IP 控制。开源治理与商业转化仍需尽调。
- Dispatched: BaseTen Labs, Inc.（Baseten）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Anyscale, Inc.（Anyscale）
- Report: 横纵研究报告/Anyscale_横纵分析报告.md
- Classification: 主 5.3 分布式训练工具（中等置信）；副 3.5 调度与编排软件、5.2 推理框架。
- Validation: 以公司融资/产品、Ray 文档、SaaS 条款与 Nscale 交易公告复核 Ray Train、Serve、Jobs、弹性扩缩和 Hosted/BYOC/on-prem 交付边界；未将开源 Ray 采用、基准、历史投资人或待交割 Nscale 协议写成当前训练收入、客户订单、控制权变更或已完成收购。
- Dispatched: Spectro Cloud, Inc.（Spectro Cloud）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: BaseTen Labs, Inc.（Baseten）
- Report: 横纵研究报告/Baseten_横纵分析报告.md
- Classification: 主 5.2 推理框架；副 5.4 推理应用编排与知识库框架（限推理应用编排）。
- Validation: 以公司产品、服务条款、融资新闻与 TechCrunch 报道复核模型部署、托管推理、Chains/workflow、融资及商业边界；未将自动扩缩、模型生态、具名案例、拟议 15 亿美元融资或底层外部组件写成独立集群调度软件、确认收入、当前估值或自有推理基础设施。
- Dispatched: Cast AI Group, Inc.（CAST AI）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Spectro Cloud, Inc.（Spectro Cloud）
- Report: 横纵研究报告/SpectroCloud_横纵分析报告.md
- Classification: 主 3.6 集群管理软件；副 3.4 容器化软件、3.5 调度与编排软件。
- Validation: 以公司法律页、产品/文档、客户资料和融资公告复核 Palette/PaletteAI 的 Kubernetes 生命周期、多环境交付、产品边界及 Series D；未将客户案例、AI/GPU/Token 主张、战略投资方或融资口径写成独立推理框架、跨 XPU 调度、客户收入、性能审计或排他供给。
- Dispatched: Chronosphere, Inc.（Chronosphere）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Fireworks.ai, Inc.（Fireworks AI）
- Report: 横纵研究报告/FireworksAI_横纵分析报告.md
- Classification: 主 5.2 推理框架；不设正式次分类。
- Validation: 以产品资料、服务条款、融资报道和行业材料复核开放模型托管推理、serverless/API、专属部署与模型专门化边界；未将二手融资/投资人信息、模型目录、Nexus/FireRouter、RAG 场景或推理服务写成确认股权、PD 分离、跨 XPU 调度、知识库框架、客户订单或收入。
- Dispatched: PrimeIntellect, Inc.（Prime Intellect）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Chronosphere, Inc.（Chronosphere；2026-01-29 已由 Palo Alto Networks 完成收购）
- Report: 横纵研究报告/Chronosphere_横纵分析报告.md
- Classification: 主 3.7 监控与健康管理软件；不设正式次分类。
- Validation: 以产品/文档、收购公告和历史融资报道复核遥测、可观测性、Telemetry Pipeline 与已完成收购；未将客户、容量/节约指标、计划中的 AI 整合或 Kubernetes 监控写成客户订单、集群控制、自治运维或独立投资机会。应从独立一级市场漏斗中移除，仅保留产品/采购与交易历史价值。
- Dispatched: Submer Technologies, S.L.（Submer）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Cast AI Group, Inc.（CAST AI）
- Report: 横纵研究报告/CASTAI_横纵分析报告.md
- Classification: 主 3.5 调度与编排软件；副 3.6 集群管理软件；4.1 仅观察项。
- Validation: 以公司融资、产品、OMNI Compute、云/集群资料复核 Kubernetes 自动资源决策、集群管理、融资与跨环境 GPU 接入边界；未将多云/ONMI 接入、投资方、未披露金额战略投资/授信、客户线索或自动化指标写成 4.4 多厂商算力池、确认收入、完整跨厂商训推平台或排他资源供给。
- Dispatched: Accelsius Holdings LLC（Accelsius）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: PrimeIntellect, Inc.（Prime Intellect）
- Report: 横纵研究报告/PrimeIntellect_横纵分析报告.md
- Classification: 主 5.3 分布式训练工具；副 4.4 多厂商算力池。
- Validation: 以公司产品、技术、融资与训练实验资料复核 OpenDiLoCo/PRIME/PRIME-RL、Lab 和 Compute Exchange 的分布式训练与多云资源整合边界；未将公司 ARR/客户数、产业投资者、资源目录、跨供应商试验或推理服务写成审计财务、排他供给、4.1/4.2/4.3 产品或稳定企业级 SLA。多厂商资源的可售性与供应协议须持续核验。
- Dispatched: 杭州曼孚科技有限公司（曼孚科技／MindFlow）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Submer Technologies, S.L.（Submer）
- Report: 横纵研究报告/Submer_横纵分析报告.md
- Classification: 主 3.2 数据中心散热；不设正式次分类，3.3 仅作集团扩张观察项。
- Validation: 以主体法律页面、产品及融资资料复核单相浸没液冷、热管理交付及融资边界；未将 Submer Group 的模块化数据中心/运营叙事、合作或产品宣传写成 Submer Technologies, S.L. 的 EPC 合同、集成交付、客户订单或收入。
- Dispatched: Foxglove Technologies Inc.（Foxglove）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Accelsius Holdings LLC（任务列示主体；与公开材料中的 Accelsius LLC 关系待终核）
- Report: 横纵研究报告/Accelsius_横纵分析报告.md
- Classification: 主 3.2 数据中心散热；不设正式次分类。
- Validation: 以公司产品、融资、合作及项目材料复核 NeuCool 两相直连芯片液冷的产品和散热价值边界；未将主体关联、投资者/合作伙伴、试点、未来协议或性能主张写成股权/合同归属、规模交付、数据中心总包、客户收入或可靠性保证。主体、IP与合同承接为交易前提。
- Dispatched: Rerun Technologies AB（Rerun）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: 杭州曼孚科技有限公司（曼孚科技／MindFlow）
- Report: 横纵研究报告/曼孚科技MindFlow_横纵分析报告.md
- Classification: 主 7 数据服务；不设正式次分类。
- Validation: 以公司官网产品资料复核数据标注、处理、管理、点云/视觉/语音/文本及自动预标注的服务边界；未将行业场景、模型/MaaS、数据管理产品菜单或二手融资条目写成客户订单、训练权利、模型/推理框架、股权或估值。融资、主体细节、数据权属及客户收入仍待尽调。
- Dispatched: Parallel Domain Inc.（Parallel Domain）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Foxglove Technologies Inc.（Foxglove）
- Report: 横纵研究报告/Foxglove_横纵分析报告.md
- Classification: 主 7 数据服务（机器人多模态数据管理、可视化、检索与评估）；不设正式次分类。
- Validation: 以官网产品、融资、客户和历史资料复核机器人数据的接入、索引、检索、可视化、调试与评估工作流；未将 Webviz/Cruise 渊源、客户/logo、远程观测、开源采用或产品案例写成数据集销售、训练数据权属、标注收入、集群监控、订单或续费。
- Dispatched: Lambda, Inc.（Lambda）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Parallel Domain Inc.（Parallel Domain）
- Report: 横纵研究报告/ParallelDomain_横纵分析报告.md
- Classification: 主 7 数据服务；不设正式次分类。
- Validation: 以产品、技术、官网投资人与服务资料复核真实记录到 Replica、标注多传感器仿真输出、场景变换与质量报告的机器感知数据/测试资产边界；未将仿真、数字孪生、API/CI、投资方或客户场景写成训练/推理框架、客户订单、训练数据权利或已审计融资。
- Dispatched: Surge Labs, Inc.（Surge AI）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Rerun Technologies AB（Rerun）
- Report: 横纵研究报告/Rerun_横纵分析报告.md
- Classification: 主 7 数据服务（Physical AI 数据记录、可视化、查询与变换）；不设正式次分类。
- Validation: 以产品、开源与融资资料复核数据记录、可视化、查询、变换和训练数据读取基础设施；未将开源采用、技术生态或 Rerun Hub private preview 写成训练数据服务订单、客户收入、通用数据资产或正式云交付。
- Dispatched: 澎峰（北京）科技有限公司（澎峰科技／PerfXLab Technologies）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Lambda, Inc.（Lambda）
- Report: 横纵研究报告/Lambda_横纵分析报告.md
- Classification: 主 8 其他（GPU 云／AI 超算算力服务）；不设正式次分类，3.3 仅观察项。
- Validation: 以公司产品、融资、合同及伙伴资料复核 GPU 云、专用集群、AI factory、债务和扩张边界；未将融资、NVIDIA/伙伴关系、机房/电力线索、容量或长期合同写成自有 GPU、确认收入、可即时容量、排他供给或数据中心总包交付。
- Dispatched: Moreh, Inc.（Moreh）。

## [2026-08-11] maintenance | 横纵报告任务清单验收与调度
- Accepted: Surge Labs, Inc.（Surge AI）
- Report: 横纵研究报告/SurgeAI_横纵分析报告.md
- Classification: 主 7 数据服务（中等置信）；不设正式次分类。
- Validation: 以可获取的公司/公开资料复核高质量数据标注与数据服务定位，并对融资、模型实验室客户、收入、数据权属和训练权利保留为待验证项；未将客户传闻、模型评测或融资/估值线索写成订单、审计收入或可转让训练数据资产。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: Moreh, Inc.（Moreh）
- Report: 横纵研究报告/Moreh_横纵分析报告.md
- Classification: 主 5.2 推理框架；副 2.2 AI算子开发、迁移与适配；不设 5.3。
- Validation: 以公司产品、技术资料、融资与合作公告复核 LLM serving、vLLM、PD 解耦、推理性能网关及跨芯片迁移/适配边界；未将 AMD/KT 投资、芯片适配、PoC/展示或融资报道写成客户订单、收入、跨厂商生产稳定性、完整训练框架或芯片供给承诺。

## [2026-08-11] maintenance | 横纵报告任务清单验收
- Accepted: 澎峰（北京）科技有限公司（澎峰科技／PerfXLab Technologies）
- Report: 横纵研究报告/澎峰科技PerfXLab_横纵分析报告.md
- Classification: 主 2.2 AI算子开发、迁移与适配；副 5.2 推理框架；不设 5.3。
- Validation: 以公司产品、开源/技术资料和融资报道复核底层算子/库、跨 CPU+xPU 适配、ONNX Runtime 接入及 PerfXLM/PPL 推理边界；未将开源关联、媒体客户/融资、训练/微调营销、云/服务器页面或硬件合作写成订单、收入、资产权属、生产 SLA 或分布式训练工具。OpenPPL 与公司 IP/合同关系仍须交易前核验。

## [2026-08-11] ingest | 国内算力公司的人才来源（试点：机构与创始人回溯）
- Disposition: New; Update
- Raw: raw/sources/2026-08-10-国内算力公司的人才来源.md
- Updated: 新建机构页 AMD、NVIDIA、中国科学院计算技术研究所、中国科学技术大学、中科曙光、百度智能芯片及架构部、国家超级计算无锡中心、清华大学（清华大学合并原微电子系/集成电路学院与计算机系高性能计算技术研究所两条孵化路线）；新建人物页 陈维良、彭莉、杨建、张建中、张文、周鸿、张凌岚、赵立东、张亚林、孙怡乐、欧阳剑、沙超群、刘新春、杨广文、尹首一、王博、欧阳鹏、陈天石、陈云霁；回链更新公司页 沐曦（MetaX）、摩尔线程（Moore Threads）、昆仑芯（Kunlunxin）、太初元碁（Tecorigin）、清微智能（TsingMicro）、天数智芯（Iluvatar CoreX）、燧原科技（Enflame）、壁仞科技（Biren Technology）。
- Notes: 本轮试点范围限定为文档第一优先级 10 家机构（清华大学三个二级单位合并为一页，故实际新建 8 个机构页），不创建任何投资机构/VC/基金页，也不处理文档第二优先级机构；壁仞科技既有 Status: Disputed 记录未被改写，仅在其旁补充新证据来源并注明交叉核对提示；海光信息（Hygon）、寒武纪（Cambricon）尚无独立公司页，相关人物页暂不提供公司内部链接，待未来促升后回链。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: wiki/institutions/、wiki/people/ 的 Markdown 内部链接解析与 Obsidian 兼容性检查。

## [2026-08-11] ingest | Accelsius
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-accelsius-hv-analysis.md
- Updated: 新建 Accelsius；新建 Accelsius主体、IP与商业承接尽调；更新 3.2 数据中心散热。

## [2026-08-11] ingest | Altera
- Disposition: New
- Raw: raw/sources/Altera横纵分析报告.md
- Created: Altera；Altera关键尽调问题

## [2026-08-11] ingest | Anyscale
- Disposition: New
- Raw: raw/sources/2026-08-11-anyscale-横纵分析报告.md
- Updated: 5.3 分布式训练工具；3.5 调度与编排软件；5.2 推理框架
- Created: Anyscale；Anyscale关键尽调问题

## [2026-08-11] ingest | AWS
- Disposition: New
- Raw: raw/sources/2026-08-11-amazon-web-services-aws-hv-analysis-report.md
- Updated: 8 其他；1.3 NPU（ASIC）；2.1 加速计算平台

## [2026-08-11] ingest | Axelera AI
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-axelera-ai-横纵分析报告.md
- Updated: 1.10 存算一体/近存计算芯片
- Created: Axelera AI；Axelera AI关键尽调问题

## [2026-08-11] ingest | Ayar Labs
- Disposition: New
- Raw: raw/sources/2026-08-11-ayar-labs-hv-analysis-report.md
- Updated: Ayar Labs；1.5 Scale-up互联通信

## [2026-08-11] ingest | CAST AI
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-cast-ai-横纵分析报告.md
- Updated: 新建 CAST AI；新建 CAST AI关键尽调问题；更新 3.5 调度与编排软件、3.6 集群管理软件、4.1 跨厂商训推算力调度平台。

## [2026-08-11] ingest | Baseten
- Disposition: New
- Raw: raw/sources/baseten-hv-analysis-report.md
- Updated: 5.2 推理框架；5.4 推理应用编排与知识库框架

## [2026-08-11] ingest | Broadcom
- Disposition: New
- Raw: raw/sources/2026-08-11-broadcom-hv-analysis-report.md
- Updated: 1.6 Scale-out互联通信；1.5 Scale-up互联通信
- Created: Broadcom；Broadcom关键尽调问题

## [2026-08-11] ingest | Chronosphere
- Disposition: New
- Raw: raw/sources/2026-08-11-chronosphere-横纵分析报告.md
- Updated: 新建 Chronosphere；新建 Chronosphere收购后采购与产品连续性尽调；更新 3.7 监控与健康管理软件。

## [2026-08-11] ingest | Cerebras
- Disposition: New
- Raw: raw/sources/2026-08-11-cerebras-systems-hv-analysis-report.md
- Updated: 1.4 其他AI芯片架构

## [2026-08-11] ingest | CoreWeave
- Disposition: New
- Raw: raw/sources/2026-08-11-coreweave-hv-analysis-report.md
- Updated: 新建 CoreWeave；更新 8 其他

## [2026-08-11] ingest | 道客（DaoCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-daocloud-横纵分析报告.md
- Updated: 新建 道客（DaoCloud）；新建 道客关键尽调问题；更新 3.4 容器化软件、3.5 调度与编排软件、3.6 集群管理软件、3.7 监控与健康管理软件。

## [2026-08-11] ingest | Datadog
- Disposition: New
- Raw: raw/sources/2026-08-11-datadog-横纵分析报告.md
- Updated: 新建 Datadog；新建 Datadog采购与商业质量尽调；更新 3.7 监控与健康管理软件。

## [2026-08-11] ingest | Foxglove
- Disposition: New
- Raw: raw/sources/2026-08-11-foxglove-横纵分析报告.md
- Updated: 新建 Foxglove；新建 Foxglove关键尽调问题；更新 7 数据服务。
## [2026-08-11] ingest | Google
- Disposition: New
- Raw: raw/sources/2026-08-11-google-hv-analysis-report.md

## [2026-08-11] ingest | Graphcore
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-graphcore-hv-analysis-report.md
- Updated: Graphcore；Graphcore关键尽调问题；1.4 其他AI芯片架构（FPGA、LPU、IPU、DPU等）；2.1 加速计算平台（CUDA-like）

## [2026-08-11] ingest | Groq
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-groq-hv-analysis-report.md
- Updated: Groq；Groq关键尽调问题；1.4 其他AI芯片架构（FPGA、LPU、IPU、DPU等）

## [2026-08-11] ingest | Inferact
- Disposition: New
- Raw: raw/sources/2026-08-11-inferact-横纵分析报告.md
- Updated: 新建 Inferact；新建 Inferact主体、开源权属与商业化尽调；更新 5.2 推理框架、AI编译与算子优化同类公司名单

## [2026-08-11] ingest | Intel
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-intel-横纵分析报告.md
- Updated: 新建 Intel；新建 Intel关键尽调问题；更新 1.4 其他AI芯片架构、2.1 加速计算平台（CUDA-like）

## [2026-08-11] ingest | Lambda
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-lambda-横纵分析报告.md
- Updated: 新建 Lambda；新建 Lambda关键尽调问题；更新 8 其他、3.3 算力中心集成

## [2026-08-11] ingest | 美光（Micron）
- Disposition: New
- Raw: raw/sources/2026-08-11-micron-technology-hv-analysis-report.md
- Updated: 美光（Micron）；美光（Micron）HBM供应与认证尽调；1.7 HBM

## [2026-08-11] ingest | Moreh
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-moreh-横纵分析报告.md
- Updated: Moreh；5.2 推理框架；2.2 AI算子开发、迁移与适配；AI编译与算子优化同类公司名单
- Entity resolution: Moreh, Inc.（美国 Delaware Corporation）与奇异摩尔（衢州）集成电路设计有限公司为不同主体，分别建档。

## [2026-08-11] lint | 392 issues found, 0 auto-fixed
- Scope: Moreh 公司页与受影响比较页的证据检查；0 个真实性疑点，0 个证据错误。其余 392 项为仓库既有未引用 Raw 提醒，未在本次单报告导入中改动。

## [2026-08-11] ingest | NVIDIA
- Disposition: New
- Raw: raw/sources/2026-08-11-nvidia-横纵分析报告.md
- Updated: NVIDIA；1.1 GPGPU（AI GPU）；1.5 Scale-up互联通信；2.1 加速计算平台（CUDA-like）

## [2026-08-11] ingest | Prime Intellect
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-prime-intellect-横纵分析报告.md
- Updated: 新建 Prime Intellect；新建 Prime Intellect关键尽调问题；更新 4.4 多厂商算力池、5.3 分布式训练工具

## [2026-08-11] ingest | RISC-V 指令集架构
- Disposition: Update
- Raw: raw/sources/2026-08-11-risc-v-横纵分析报告.md
- Updated: RISC-V 指令集架构; RISC-V 机器人自研芯片生态与功能安全核验

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: RISC-V 指令集架构；RISC-V 机器人自研芯片生态与功能安全核验。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 392 个未引用 Raw 文件为既有全库待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | RadixArk
- Disposition: New
- Raw: raw/sources/2026-08-11-radixark-横纵分析报告.md
- Updated: 新建 RadixArk；新建 RadixArk开源权属与商业化尽调；更新 5.2 推理框架、4.2 推理PD分离、5.3 分布式训练工具

## [2026-08-11] ingest | Rerun
- Disposition: New
- Raw: raw/sources/2026-08-11-rerun-横纵分析报告.md
- Updated: 新建 Rerun；新建 Rerun关键尽调问题；更新 7 数据服务。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Rerun；Rerun关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办，未在本次单报告导入中改动。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: RadixArk；RadixArk开源权属与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库未引用 Raw 提醒为既有待办，未在本次单报告导入中改动。

## [2026-08-11] ingest | SK海力士（SK hynix）
- Disposition: New; Disputed
- Raw: raw/sources/sk-hynix-hv-analysis-report.md
- Updated: 新建 SK海力士（SK hynix）；新建 SK海力士HBM供应与认证尽调；更新 1.7 HBM

## [2026-08-11] ingest | Submer
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-submer-横纵分析报告.md
- Updated: 新建 Submer；新建 Submer关键尽调问题；更新 3.2 数据中心散热；更新 3.3 算力中心集成

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Submer；Submer关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办，未在本次单报告导入中改动。

## [2026-08-11] ingest | Spectro Cloud
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-spectrocloud-横纵分析报告.md
- Updated: 新建 Spectro Cloud；新建 Spectro Cloud关键尽调问题；更新 3.4 容器化软件、3.5 调度与编排软件、3.6 集群管理软件

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Spectro Cloud；Spectro Cloud关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办，未在本次单报告导入中改动。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: SK海力士（SK hynix）；SK海力士HBM供应与认证尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办，未在本次单报告导入中改动。

## [2026-08-11] ingest | Supermicro
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-supermicro-横纵分析报告.md
- Updated: Supermicro；Supermicro关键尽调问题；3.3 算力中心集成；3.2 数据中心散热

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Supermicro；Supermicro关键尽调问题。
- Verified: 0 evidence fidelity suspects；0 Raw-reference errors。
- Note: 全库未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | Surge AI
- Disposition: New
- Raw: raw/sources/2026-08-11-surge-ai-横纵分析报告.md
- Updated: 新建 Surge AI；新建 Surge AI关键尽调问题；更新 7 数据服务。

## [2026-08-11] ingest | Tenstorrent
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-tenstorrent-横纵分析报告.md
- Updated: 新建 Tenstorrent；新建 Tenstorrent关键尽调问题；更新 1.4 其他AI芯片架构（FPGA、LPU、IPU、DPU等）。
- Classification: 主 1.4 其他AI芯片架构（Tensix 专用 AI 加速器／RISC-V／chiplet）；不设 2.1 正式次分类。TT 软件的公开可编程性及产品化证据存在，但主流框架训练/后训练的工作负载广度硬条件未获充分证明。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Surge AI；Surge AI关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Tenstorrent；Tenstorrent关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 魔形智能（Magik Compute）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-token-superfactory-magik-横纵分析报告.md
- Updated: 新建 魔形智能（Magik Compute）；新建 魔形智能主体、资产与服务能力尽调；更新 8 其他
- Classification: 主 8 其他（大模型 Token 推理服务／运营）；5.2 推理框架仅条件性观察；4.4 多厂商算力池与 4.2 推理 PD 分离均不成立。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 魔形智能（Magik Compute）；魔形智能主体、资产与服务能力尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | Vertiv
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-vertiv-横纵分析报告.md
- Updated: 新建 Vertiv；新建 Vertiv项目交付与AI业务敞口尽调；更新 3.2 数据中心散热、3.3 算力中心集成
- Classification: 主 3.2 数据中心散热；正式次类 3.3 算力中心集成。积压、NVIDIA 架构协作、客户类别和并购协同均未写成客户订单、AI 收入、已实现交付或全部项目总责。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Vertiv；Vertiv项目交付与AI业务敞口尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 趋动科技（VirtAI Tech）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-virtaitech-横纵分析报告.md
- Updated: 新建 趋动科技（VirtAI Tech）；新建 趋动科技主体、跨XPU兼容与商业化尽调；更新 3.5 调度与编排软件、3.6 集群管理软件。
- Classification: 主 3.5 调度与编排软件；正式次类 3.6 集群管理软件。公开兼容矩阵主要支持 NVIDIA CUDA GPU 池化；4.1 跨厂商训推算力调度平台与 4.4 多厂商算力池均不成立。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 趋动科技（VirtAI Tech）；趋动科技主体、跨XPU兼容与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 三星电子（Samsung Electronics）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-samsung-electronics-横纵分析报告.md
- Updated: 新建 三星电子（Samsung Electronics）；新建 三星电子 HBM供应、认证与系统交付尽调；更新 1.7 HBM。
- Classification: 主 1.7 HBM；无正式次分类。HBM-PIM 仅为研发／验证方向，不归 1.10；HBM 不构成 NPU、互联通信或加速计算平台。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 三星电子（Samsung Electronics）；三星电子 HBM供应、认证与系统交付尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | Xscape Photonics
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-xscape-photonics-横纵分析报告.md
- Updated: 新建 Xscape Photonics；新建 Xscape Photonics关键尽调问题；更新 1.5 Scale-up互联通信、3.1 光通信。
- Classification: 主 1.5 Scale-up互联通信；正式次类 3.1 光通信。不归 1.6 Scale-out互联通信或 1.9 光子/光电计算芯片；产品适用场景、投资关系与 OIF-compatible 设计均不外推为完整网络、订单、认证或量产。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: Xscape Photonics；Xscape Photonics关键尽调问题。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 一流科技（OneFlow）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-一流科技oneflow-横纵分析报告.md
- Updated: 新建 一流科技（OneFlow）；新建 一流科技主体、IP与商业化尽调；更新 5.1 训练框架、5.3 分布式训练工具。
- Classification: 主 5.3 分布式训练工具；正式次类 5.1 训练框架；不纳入 2.1 加速计算平台。开源代码、论文、官网品牌与产品菜单不外推为法人／IP、客户收入、生产 SLA 或机器人负载验证。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 一流科技（OneFlow）；一流科技主体、IP与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 一猫之下（1Cat）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-yimaozhixia-横纵分析报告.md
- Updated: 新建 一猫之下（1Cat）；新建 一猫之下主体、品牌与商业化尽调；更新 8 其他
- Classification: 主 8 其他（早期算力硬件／本地部署候选）；3.3 仅条件性观察；3.2／5.2 不成立

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 一猫之下（1Cat）；一猫之下主体、品牌与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。
## [2026-08-11] ingest | 一苇宇航
- Disposition: New
- Raw: raw/sources/2026-08-11-一苇宇航-横纵分析报告.md
- Updated: 新建 一苇宇航；新建 一苇宇航主体与商业化尽调；更新 8 其他。
- Classification: 主 8 其他；无正式次分类。未形成可验证的 AI infra 产品证据，不由“宇航”名称推断空间算力、数据服务或芯片能力。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 一苇宇航；一苇宇航主体与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 万格智元（ONE-TOKEN）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-wangezhiyuan-横纵分析报告.md
- Updated: 新建 万格智元（ONE-TOKEN）；新建 万格智元主体、Runtime权属与商业化尽调；更新 8 其他、5.2 推理框架
- Classification: 主 8 其他（端侧 AI 基础设施／推理 Runtime 条件性候选）；5.2 推理框架仅条件性观察。品牌、Runtime/IP、融资、性能、客户与商业化均未闭环，不由公司自述扩张为正式推理框架或机器人部署能力。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 万格智元（ONE-TOKEN）；万格智元主体、Runtime权属与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 中科曙光（Sugon）
- Disposition: New
- Raw: raw/sources/2026-08-11-sugon-横纵分析报告.md
- Updated: 新建 中科曙光（Sugon）；新建 中科曙光重组、供应与液冷交付尽调；更新 3.3 算力中心集成、3.2 数据中心散热。
- Classification: 主 3.3 算力中心集成；正式次类 3.2 数据中心散热。中科曙光是服务器、存储、液冷与系统交付商，不把海光联营关系或 DAS 叙事外推为自有芯片或 CUDA-like 平台。

## [2026-08-11] ingest | 中际旭创（Zhongji Innolight）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-中际旭创-横纵分析报告.md
- Updated: 新建 中际旭创（Zhongji Innolight）；新建 中际旭创光模块供应与集中度尽调；更新 3.1 光通信。
- Classification: 主 3.1 光通信；无正式次分类。高速光模块是收入承载物；不将 LPO、硅光、CPO 或 AI 数据中心应用场景外推为 Scale-up/Scale-out 网络系统、光计算芯片或软件平台。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 中际旭创（Zhongji Innolight）；中际旭创光模块供应与集中度尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 九章云极（DataCanvas）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-九章云极datacanvas-横纵分析报告.md
- Updated: 新建 九章云极（DataCanvas）；新建 九章云极主体、独立产品化与商业质量尽调；更新 4.1 跨厂商训推算力调度平台。
- Classification: 主 4.1 跨厂商训推算力调度平台（中等置信）；不设 3.6 集群管理软件、4.4 多厂商算力池或 5.3 分布式训练工具正式次分类。Alaya NeW OS／AI Factory／CCI 支持异构训推控制面方向，但不外推为第三方多厂商生产部署、独立软件收入、资源池或分布式训练工具商业化。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 九章云极（DataCanvas）；九章云极主体、独立产品化与商业质量尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 云天励飞（Intellifusion）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-云天励飞-横纵分析报告.md
- Updated: 新建 云天励飞（Intellifusion）；新建 云天励飞机器人芯片、软件生态与收入质量尽调；更新 1.3 NPU（ASIC）。
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。DeepXBot、DeepVerse、Nova500 与 P／D 超节点仅为研发／路线图，DETVM 不具备 2.1 准入证据；算力服务收入不取代芯片主标签。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 云天励飞（Intellifusion）；云天励飞机器人芯片、软件生态与收入质量尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 全库 392 个未引用 Raw 文件为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 云轴科技（ZStack）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-云轴科技zstack-横纵分析报告.md
- Updated: 新建 云轴科技（ZStack）；新建 云轴科技主体、股权、IP与AIOS交付尽调；更新 3.4 容器化软件、3.5 调度与编排软件、3.6 集群管理软件、3.7 监控与健康管理软件。
- Classification: 主 3.6 集群管理软件；正式次类 3.4 容器化软件；3.5／3.7 仅条件性观察。AIOS 的调度、监控和性能主张不外推为跨厂商训推平台、生产 SLA、客户收入或机器人训练验证。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 云轴科技（ZStack）；云轴科技主体、股权、IP与AIOS交付尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库未引用 Raw 提醒为既有待办。
## [2026-08-11] ingest | 京程智慧
- Disposition: New
- Raw: raw/sources/2026-08-11-京程智慧-横纵分析报告.md

## [2026-08-11] ingest | 优网云计算
- Disposition: New
- Raw: raw/sources/2026-08-11-优网云计算-横纵分析报告.md
- Updated: 新建 优网云计算；新建 优网云计算主体、资产与服务能力尽调；更新 8 其他。
- Classification: 主 8 其他；无正式次分类。未取得 GPU 云 SKU、机房／设备权属或客户 SLA 前，不归 3.3、4.4 或 3.6；仅可资料索取和小额非生产验证。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 优网云计算；优网云计算主体、资产与服务能力尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 提醒为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 元启半导体
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-元启半导体_横纵分析报告.md
- Updated: 新建 元启半导体；新建 元启半导体主体、产品、融资与IP尽调；更新 3.1 光通信。
- Classification: 主 3.1 光通信；无正式次分类。`112G` SerDes IP、`400G/800G` AEC Retimer 与光模块 oDSP 的证据仅支持研发/展出方向，不外推为 Scale-up、计算加速器、量产、客户、收入或完整 IP/供应能力。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 元启半导体；元启半导体主体、产品、融资与IP尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。全库 392 个未引用 Raw 提醒为既有待办；本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 光迅科技（Accelink Technologies）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-光迅科技accelinktechnologies-横纵分析报告.md
- Updated: 新建 光迅科技（Accelink Technologies）；新建 光迅科技高速光模块供应与资本开支尽调；更新 3.1 光通信。
- Classification: 主 3.1 光通信；无正式次分类。`400G`/`800G` 批量出货线索与 `1.6T` 产品目录/交付能力不外推为分速率收入、具名客户、规模量产、完整网络系统或光计算业务。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 光迅科技（Accelink Technologies）；光迅科技高速光模块供应与资本开支尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 共绩科技（Gongji）
- Disposition: New
- Raw: raw/sources/2026-08-11-共绩科技-横纵分析报告.md
- Updated: 新建 共绩科技（Gongji）；新建 共绩科技主体、供给与服务能力尽调；更新 4.4 多厂商算力池、3.5 调度与编排软件、3.6 集群管理软件、3.7 监控与健康管理软件。
- Classification: 主 4.4 多厂商算力池（中等置信）；3.5／3.6／3.7 仅条件性观察；4.1 不成立。多来源资源聚合及服务入口不外推为跨 XPU 生产级训练／推理控制面、合同化 SLA 或稳定商业能力。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 共绩科技（Gongji）；共绩科技主体、供给与服务能力尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 北中网芯
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-北中网芯_横纵分析报告_修订版.md
- Updated: 新建 北中网芯；新建 北中网芯主体、资产与商业化尽调；更新 1.4 其他AI芯片架构、1.6 Scale-out互联通信。
- Classification: 主 1.4 其他AI芯片架构（DPU/网络数据处理，中低置信）；1.6 仅条件性观察。网络数据处理/DPU 路线不外推为量产、客户收入、完整 Scale-out Fabric、CUDA-like 平台或可交割资产；主体、控制权、IP、持续经营和商业化均须 P0 核验。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 北中网芯；北中网芯主体、资产与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与修订版报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 北电数智（BeDiCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-北电数智-横纵分析报告.md
- Updated: 新建 北电数智（BeDiCloud）；新建 北电数智主体、项目、软件与算力供给尽调；更新 3.3 算力中心集成、3.5 调度与编排软件、4.1 跨厂商训推算力调度平台、5.2 推理框架。
- Classification: 主 3.3 算力中心集成（中等置信）；正式次类 3.5（低—中等置信）；4.1 与 5.2 仅条件性观察。异构芯片适配、认证、PoC 与模型适配不外推为芯片 IP、跨厂商生产控制面、独立推理运行时、可用容量、收入或 SLA。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 北电数智（BeDiCloud）；北电数智主体、项目、软件与算力供给尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 华为昇腾（Ascend）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-华为昇腾-横纵分析报告.md
- Updated: 新建 华为昇腾（Ascend）；新建 华为昇腾供应、软件生态与机器人适用性尽调；更新 1.3 NPU、2.1 加速计算平台。
- Classification: 主 1.3 NPU（ASIC）；正式次类 2.1 加速计算平台（CUDA-like）。CANN 的完整软件栈与开发者入口支持平台分类，但不外推为 CUDA 等价、可审计昇腾独立财务、无条件供货、机器人机载适用性或可独立交易标的。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 华为昇腾（Ascend）；华为昇腾供应、软件生态与机器人适用性尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 原始报告正文已保真；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 博云（BoCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-bocloud-横纵分析报告.md
- Updated: 新建 博云（BoCloud）；新建 博云主体、融资、IP与产品兼容性尽调；更新 3.4 容器化软件、3.5 调度与编排软件、4.4 多厂商算力池。
- Classification: 主 3.4 容器化软件；正式次类 3.5 调度与编排软件、4.4 多厂商算力池。BOC/ACE/BOS 的官网产品信息不外推为生产级兼容性、实际资源运营、订单/收入或主体承继；采购仅限有退出条件的 PoC。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 博云（BoCloud）；博云主体、融资、IP与产品兼容性尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 392 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 地平线（Horizon Robotics）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-地平线-horizon-robotics-横纵分析报告.md
- Updated: 新建 地平线（Horizon Robotics）；新建 地平线机器人适用性、D-Robotics边界与HSD商业化尽调；更新 1.3 NPU（ASIC）。
- Classification: 主 1.3 NPU（ASIC）；不设正式次分类。车规 BPU／征程的量产、工具链和非车开发者套件不外推为 CUDA-like 平台、通用推理框架、人形机器人主控、VLA／WAM 商业化或 D-Robotics 资产。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 地平线（Horizon Robotics）；地平线机器人适用性、D-Robotics边界与HSD商业化尽调。
- Verified: 0 个真实证据保真问题；0 个 Raw 引用错误。
- Note: Raw 正文与原始报告逐字一致；391 个未引用 Raw 文件为既有全库待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 大禹智芯（DAYU DPU）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-大禹智芯_横纵分析报告_修订版.md
- Updated: 新建 大禹智芯（DAYU DPU）；新建 大禹智芯主体、产品与商业化尽调；更新 1.4 其他AI芯片架构、1.6 Scale-out互联通信。
- Classification: 主 1.4 其他AI芯片架构（DPU）；1.6 仅条件性观察，不设正式次分类。HPRT/RDMA、生态与合作线索不外推为完整 Fabric、端到端 AI 集群交付、客户收入或持续规模经营。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 大禹智芯（DAYU DPU）；大禹智芯主体、产品与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 391 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 奇点云（StartDT）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-奇点云-startdt-横纵分析报告.md
- Updated: 新建 奇点云（StartDT）；新建 奇点云主体、品牌、IP与商业化尽调；更新 7 数据服务。
- Classification: 主 7 数据服务；不设正式次分类。DataKun、SimbaML 与 Agent 产品定位不外推为集群管理、异构调度、训练／推理框架、机器人模型能力或已验证的商业／资产承接。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 奇点云（StartDT）；奇点云主体、品牌、IP与商业化尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；全库 391 个未引用 Raw 文件为既有待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 奇点科技（SingularityTech）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-奇点科技-横纵分析报告.md
- Updated: 新建 奇点科技（SingularityTech）；新建 奇点科技主体、融资与算力服务尽调；更新 8 其他。
- Classification: 主 8 其他（GPU 算力租赁/算力资产托管与撮合服务）；无正式次分类。调度引擎、全球节点、万卡、能效与安全宣传不外推为算力中心集成、调度/集群管理、4.x 或 5.x 能力；中标、融资与保险线索不等同收入、回款、资产或 SLA。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 奇点科技（SingularityTech）；奇点科技主体、融资与算力服务尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；391 个未引用 Raw 文件为既有全库待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-11] ingest | 安擎（Enginetech）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-安擎-横纵分析报告.md
- Updated: 新建 安擎（Enginetech）；新建 安擎主体、交付与供应链尽调；更新 3.3 算力中心集成。
- Classification: 主 3.3 算力中心集成。AI／边缘服务器、存储、AI 交换机与定制交付不外推为 GPU／NPU／CPU、关键加速器 IP、CUDA 类软件栈、独立跨厂商调度平台、可保证供货或已验证机器人项目；仅作为可回滚、非排他的 PoC 候选。

## [2026-08-11] ingest | 山西秦云
- Disposition: New
- Raw: raw/sources/2026-08-11-山西秦云-横纵分析报告.md
- Updated: 新建 山西秦云；更新 8 其他。
- Classification: 主 8 其他；3.3 算力中心集成仅条件性观察。不得将“秦云基础”、BCI Group、CHINCLOUD 或山西秦能的项目、融资、股权、合同、资产或 IP 迁入山西秦云企业管理有限公司。

## [2026-08-11] ingest | 密瓜智能（Dynamia）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-密瓜智能-横纵分析报告.md
- Updated: 新建 密瓜智能（Dynamia）；新建 密瓜智能主体、HAMi权属与商业承接尽调；更新 4.1 跨厂商训推算力调度平台。
- Classification: 主 4.1 跨厂商训推算力调度平台（条件性、中低置信）；不设正式次分类。上海公司、网站运营的新加坡法人、Dynamia 品牌与 HAMi 公共项目之间的主体、IP、合同、SLA 和收入承接均未闭环，不外推为已验证生产交付。

## [2026-08-11] ingest | 寒武纪（Cambricon）
- Disposition: New
- Raw: raw/sources/2026-08-11-寒武纪_横纵分析报告.md
- Updated: 新建 寒武纪（Cambricon）；新建 寒武纪关键尽调问题；更新 1.3 NPU（ASIC）、2.1 加速计算平台（CUDA-like）、陈天石、陈云霁、中国科学院计算技术研究所、中国科学技术大学、NVIDIA。
- Classification: 主 1.3 NPU（ASIC）；正式次类 2.1 加速计算平台。NeuWare 平台完整度不外推为与 CUDA 对等的兼容率、性能、稳定性、生态或机器人生产可用性；客户集中、供应、库存与实际负载均须 P0 验证。

## [2026-08-11] ingest | 山西秦能（BCI Group）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-山西秦能-横纵分析报告.md
- Updated: 新建 山西秦能（BCI Group）；新建 山西秦能主体、融资交割与商业承接尽调；更新 8 其他。
- Classification: 主 8 其他；3.3 算力中心集成仅条件性观察。BCI Group、山西秦云、“秦云基础”和项目叙事均不证明山西秦能企业管理有限公司已承接项目、资产、合同、客户、收入或 IP。

## [2026-08-12] ingest | 恒扬数据
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-恒扬数据_横纵分析报告.md
- Updated: 新建 恒扬数据；新建 恒扬数据主体、重组、DPU权属与商业质量尽调；更新 1.4 其他AI芯片架构。
- Classification: 主 1.4 其他AI芯片架构（FPGA-DPU／可编程智能网卡与数据处理板卡）；不设正式次分类。不得将外购 FPGA 板卡、RDMA/P4、指定整机厂或拟收购外推为自研 ASIC、完整 Scale-out Fabric、直接客户订单或已完成控制权交割。

## [2026-08-12] ingest | 数巅科技（Dipeak）
- Disposition: New; Disputed
- Raw: raw/sources/数巅科技-横纵分析报告.md
- Updated: 新建 数巅科技（Dipeak）；新建 数巅科技主体、IP与商业化尽调；更新 5.4 推理应用编排与知识库框架、8 其他。
- Classification: 主 5.4 推理应用编排与知识库框架；次 8 其他（企业数据虚拟化／数据智能引擎）。应用层模型／工具调度、服务器合作和一体机叙事不外推为跨厂商训推算力调度、集群控制或可审计客户收入。

## [2026-08-12] ingest | 新易盛（Eoptolink）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-新易盛eoptolink-横纵分析报告.md
- Updated: 新建 新易盛（Eoptolink）；新建 新易盛光模块供应、前沿商业化与治理尽调；更新 3.1 光通信。
- Classification: 主 3.1 光通信；不设正式次分类。高速模块可用于 AI 集群不等于完整 Scale-up／Scale-out 网络，OCS/XPO/NPO/硅光展示或样品不等于光计算、量产收入、客户订单或 SLA。

## [2026-08-12] ingest | 数据堂（Datatang）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-数据堂-datatang-横纵分析报告.md
- Updated: 新建 数据堂（Datatang）；新建 数据堂主体、数据权属与具身交付尽调；更新 7 数据服务。
- Classification: 主 7 数据服务；无正式次分类，6.5 VLA 仅为负载关联。数据资源账面价值、具身项目／设施宣传或战略合作不外推为逐数据集训练权利、成熟机器人订单、可用产能或可交易 IP。

## [2026-08-12] ingest | 无问芯穹（Infinigence AI）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-09-无问芯穹infinigenceai-横纵分析报告.md
- Updated: 新建 无问芯穹（Infinigence AI）；新建 无问芯穹主体、资产与商业化尽调；更新 4.1 跨厂商训推算力调度平台、4.4 多厂商算力池、4.3 推理跨XPU异构调度（条件性观察）。
- Classification: 主 4.1；正式次类 4.4；4.3 仅条件性观察。品牌融资、资源纳管、模型接入、AMD 合作或 MiniMax 协议不外推为上海主体已闭环的资产、收入、资源转售权、生产跨 XPU 调度或可交易整体业务。

## [2026-08-12] ingest | 易捷行云（EasyStack）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-easystack-横纵分析报告.md
- Updated: 新建 易捷行云（EasyStack）；新建 易捷行云主体、控制权与可交易资产尽调；更新 3.4 容器化软件、3.6 集群管理软件。
- Classification: 主 3.4 容器化软件；正式次类 3.6 集群管理软件。不将 Kubernetes 原生调度、“一云多芯”、兼容适配、集团自述、开源生态或项目宣传外推为独立调度、跨厂商算力池、当前控制权、已验证收入或可交易资产。

## [2026-08-12] ingest | 时速云（TenxCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-tenxcloud-横纵分析报告.md
- Updated: 新建 时速云（TenxCloud）；新建 北京云思畅想主体、控制权与IP承接尽调；更新 3.4 容器化软件、3.5 调度与编排软件、3.7 监控与健康管理软件、4.1 跨厂商训推算力调度平台（条件性观察）。
- Classification: 主 3.4；正式次类 3.5／3.7；4.1 仅条件性观察。世纪互联、关联主体、开源项目、客户 Logo、历史收费、匿名具身案例或多芯展示均不外推为当前资产、订单、收入、IP、跨 XPU 生产能力或持续服务承诺。

## [2026-08-12] ingest | 易普集（EPG）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-易普集实业-横纵分析报告.md
- Updated: 新建 易普集（EPG）；新建 易普集实业主体、融资、资产与商业承接尽调；更新 8 其他、3.3 算力中心集成（条件性观察）、3.2 数据中心散热（条件性观察）。
- Classification: 主 8 其他；无正式次分类，3.3／3.2 仅条件性观察。不得把品牌、近名主体、项目、融资或液冷叙事迁入易普集实业有限公司的资产、客户、合同、收入、IP 或服务能力。

## [2026-08-12] ingest | 是石科技（METASTONE）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-是石科技-横纵分析报告.md
- Updated: 新建 是石科技（METASTONE）；新建 是石科技主体、资产与商业承接尽调；更新 3.3 算力中心集成、3.6 集群管理软件（条件性观察）、4.1 跨厂商训推算力调度平台（条件性观察）。
- Classification: 主 3.3；3.6／4.1 仅条件性观察。江苏是石与平湖是石的控制、产品/IP、合同收入和融资承接未闭环，不外推为可验证系统集成、集群控制或异构调度能力。

## [2026-08-12] ingest | 星用空间
- Disposition: New
- Raw: raw/sources/2026-08-11-星用空间-横纵分析报告.md
- Updated: 新建 星用空间；新建 星用空间主体与商业化尽调；更新 8 其他。
- Classification: 主 8 其他；无正式次分类。资料不足以证明目标主体、产品、任务、IP、客户、收入或 AI infra 交付，不支持采购、投资或并购判断。

## [2026-08-11] lint | 0 issues found, 0 auto-fixed
- Scope: 安擎（Enginetech）；安擎主体、交付与供应链尽调。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本次 Raw 正文与原始报告逐字一致；391 个未引用 Raw 文件为既有全库待办，本次新增 Raw 已由两篇页面引用。

## [2026-08-12] ingest | 景嘉微（Jingjia Micro）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-景嘉微_横纵分析报告.md
- Updated: 新建 景嘉微（Jingjia Micro）；新建 景嘉微—诚恒微控制权与机器人芯片边界尽调；更新 1.8 图形GPU。
- Classification: 主 1.8 图形GPU、无正式次分类；JM11 与诚恒微线索不外推为已验证通用 AI GPU、CUDA-like 平台或机器人 NPU。

## [2026-08-12] ingest | 智算星空（Zhisuanke）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-智算星空-横纵分析报告.md
- Updated: 新建 智算星空（Zhisuanke）；新建 智算星空主体、产品与商业化尽调；更新 8 其他。
- Classification: 主 8 其他（低置信）、无正式次分类；空天产品与智算服务未形成同一主体、合同和验收闭环。

## [2026-08-12] ingest | 曙光数创（Sugon DataEnergy）
- Disposition: New
- Raw: raw/sources/曙光数创-横纵分析报告.md
- Updated: 新建 曙光数创（Sugon DataEnergy）；新建 曙光数创控制权、商业质量与液冷交付尽调；更新 3.2 数据中心散热、3.3 算力中心集成。
- Classification: 主 3.2 数据中心散热、正式次类 3.3 算力中心集成；项目、客户集中、关联交易和现金转换均须核验。

## [2026-08-12] ingest | 曼孚科技（MindFlow）
- Disposition: New; Disputed
- Raw: raw/sources/曼孚科技MindFlow_横纵分析报告.md
- Updated: 新建 曼孚科技（MindFlow）；新建 曼孚科技主体、融资、数据权属与机器人交付尽调；更新 7 数据服务。
- Classification: 主 7 数据服务、无正式次分类；不将场景展示或平台功能外推为订单、数据所有权、模型训练权或软件收入。

## [2026-08-12] ingest | 派欧云（PPIO）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-派欧云PPIO-横纵分析报告.md
- Updated: 新建 派欧云（PPIO）；新建 派欧云（PPIO）主体、AI云单位经济与跨XPU能力尽调；更新 8 其他。
- Classification: 主 8 其他、无正式次分类；资源运营不等于跨 XPU 控制面，主体承接、资源权属、单位经济和 SLA 待核验。

## [2026-08-12] ingest | 浪潮信息（Inspur Electronic Information）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-浪潮信息-横纵分析报告.md
- Updated: 新建 浪潮信息（Inspur Electronic Information）；新建 浪潮信息主体、供应链与液冷交付尽调；更新 3.3 算力中心集成、3.2 数据中心散热。
- Classification: 主 3.3 算力中心集成、正式次类 3.2 数据中心散热；供应/合规、液冷验收、客户集中和机器人负载边界须逐项验证。

## [2026-08-12] ingest | 海天瑞声（Speechocean）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-海天瑞声-speechocean-横纵分析报告.md
- Updated: 新建 海天瑞声（Speechocean）；新建 海天瑞声数据权属、具身交付与跨境合规尽调；更新 7 数据服务。
- Classification: 主 7 数据服务、无正式次分类；具身覆盖、标准产品数量或制度披露不外推为机器人订单、可无限再许可数据或真机效果。

## [2026-08-12] ingest | 海光信息（Hygon）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-海光信息-横纵分析报告.md
- Updated: 新建 海光信息（Hygon）；新建 海光信息IP、DCU交付与供应连续性尽调；更新 1.1 GPGPU（AI GPU）。
- Classification: 主 1.1 GPGPU（AI GPU）、无正式次分类；DTK 平台、DCU 商业交付、主体/IP 与供应连续性均须 P0 验证。

## [2026-08-12] lint | 0 issues found, 0 auto-fixed
- Scope: 景嘉微、智算星空、曙光数创、曼孚科技、派欧云、浪潮信息、海天瑞声、海光信息及其对应开放问题页。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 本批新增/复核页面的 Raw 与内部链接均已作限定范围检查；未引用 Raw 列表是全库既有待办。

## [2026-08-12] ingest | 海瑞弗（Hairf）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-hairf-horizontal-vertical-analysis-report.md
- Updated: 新建 海瑞弗（Hairf）；新建 海瑞弗主体、液冷产品与商业承接尽调；更新 3.2 数据中心散热、3.3 算力中心集成（条件性观察）。
- Classification: 主 3.2 数据中心散热；3.3 仅条件性观察。液冷展示、案例、品牌历史、专利或规划不外推为量产、订单、收入或可交易资产。

## [2026-08-12] ingest | 潞晨科技（Luchen）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-潞晨科技luchen-横纵分析报告.md
- Updated: 新建 潞晨科技（Luchen）；新建 潞晨科技主体、IP与商业承接尽调；更新 8 其他、3.3 算力中心集成/5.3 分布式训练工具/5.2 推理框架（条件性观察）。
- Classification: 主 8 其他、无正式次分类。北京主体与新加坡主体、品牌、云资源及开源项目的资产、合同和收入承接未闭环。

## [2026-08-12] ingest | 清程极智（Qingcheng.ai）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-09-清程极智-横纵分析报告.md
- Updated: 新建 清程极智（Qingcheng.ai）；新建 清程极智主体、IP与商业化尽调；更新 5.2 推理框架、5.1 训练框架、4.1 跨厂商训推算力调度平台（条件性观察）。
- Classification: 主 5.2 推理框架、正式次类 5.1 训练框架；4.1 仅条件性观察。主体/IP、客户/收入、性能与服务承诺均须核验。

## [2026-08-12] ingest | 澎峰科技（PerfXLab Technologies）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-澎峰科技perfxlab-横纵分析报告.md
- Updated: 新建 澎峰科技（PerfXLab Technologies）；新建 澎峰科技关键尽调问题；更新 2.2 AI算子开发、迁移与适配、5.2 推理框架。
- Classification: 主 2.2 AI算子开发、迁移与适配、正式次类 5.2 推理框架；不将云/服务器文案或开源关联外推为 5.3、2.1、订单、收入或可交易 IP。

## [2026-08-12] lint | 0 issues found, 0 auto-fixed
- Scope: 海瑞弗、潞晨科技、清程极智、澎峰科技及其对应开放问题页。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误。
- Note: 新增/复核页面的 Raw 与内部链接均已作限定范围检查；未引用 Raw 是既有全库待办。

## [2026-08-12] ingest | 灵汐科技（Lynxi）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-灵汐科技Lynxi横纵分析报告.md
- Updated: 新建 灵汐科技（Lynxi）；新建 灵汐科技关键尽调问题；更新 1.4 其他AI芯片架构。
- Classification: 主 1.4 其他AI芯片架构；无正式次分类。KA200“量产”、感知产品化、客户、出货、收入、供货和软件栈均待核验。

## [2026-08-12] ingest | 灵雀云（Alauda）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-alauda-横纵分析报告.md
- Updated: 新建 灵雀云（Alauda）；新建 灵雀云Alauda品牌与北京凌云雀科技有限公司主体承接；更新 8 其他及 3.4／3.5／3.6／3.7 条件性观察。
- Classification: 主 8 其他；无正式次分类。品牌、产品/IP、客户、服务、融资与跨境权益向北京法人的承接尚未闭环。

## [2026-08-12] ingest | 燧弘华创（Suhong Huachuang）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-燧弘华创-横纵分析报告.md
- Updated: 新建 燧弘华创（Suhong Huachuang）；新建 燧弘华创主体连续性、资产与商业承接尽调；更新 3.3 算力中心集成。
- Classification: 主 3.3 算力中心集成；无正式次分类。上海/江苏主体连续性及合并业务、资产、合同和收入承接待核验，不将集团项目或框架额外推为交付。

## [2026-08-12] ingest | 热数科技（ThermalAI）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-热数科技_横纵分析报告.md
- Updated: 新建 热数科技（ThermalAI）；新建 热数科技AIDC商业化与资产边界尽调；更新 3.2 数据中心散热。
- Classification: 主 3.2 数据中心散热；无正式次分类。独立成交仅为一套 `130,000.00 元` 微通道液冷组件加工服务，不外推为 AIDC 项目、量产、订单或收入。

## [2026-08-12] ingest | 瑞芯微（Rockchip）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-瑞芯微Rockchip_横纵分析报告.md
- Updated: 新建 瑞芯微（Rockchip）；新建 瑞芯微财务、机器人交付与RKNN平台尽调；更新 1.3 NPU。
- Classification: 主 1.3 NPU；无正式次分类。AIoT SoC 与 RKNN 工具链不外推为机器人订单、CUDA-like 平台或独立跨硬件推理框架。

## [2026-08-12] ingest | 益思芯（Yisixin）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-益思芯_横纵分析报告_修订版.md
- Updated: 新建 益思芯（Yisixin）；新建 益思芯主体、产品与商业化尽调；更新 1.4 其他AI芯片架构，1.6 仅条件性复核。
- Classification: 主 1.4 其他AI芯片架构；无正式次分类。DPU/SmartNIC 发布、测试/适配与 FTTR 合作不证明量产、客户、收入或完整 AI 集群交付。

## [2026-08-12] ingest | 盛科通信（Centec Networks）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-盛科通信CentecNetworks_横纵分析报告.md
- Updated: 新建 盛科通信（Centec Networks）；新建 盛科通信高端AI以太网Fabric验证问题；更新 1.6 Scale-out互联通信。
- Classification: 主 1.6 Scale-out互联通信；无正式次分类。交换 ASIC、模组和 NOS/SDK 的既有商业化不等于已验证高端 AI Fabric，SKU、RoCE、长稳、供给与 SLA 待核验。

## [2026-08-12] ingest | 瞻芯科技（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-11-瞻芯科技-横纵分析报告.md
- Updated: 新建 瞻芯科技（英文名待核验）；新建 瞻芯科技主体、产品与商业化尽调；更新 8 其他。
- Classification: 主 8 其他（低置信）；无正式次分类。主体、产品、IP、流片、客户和商业化均待核验，不推定 AI 芯片或数据中心能力。

## [2026-08-12] ingest | 知存科技（Witmem）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-知存科技Witmem_横纵分析报告.md
- Updated: 新建 知存科技（Witmem）；新建 知存科技Witmem关键尽调问题；更新 1.10 存算一体/近存计算芯片。
- Classification: 主 1.10 存算一体/近存计算芯片；无正式次分类。杭州知存算力科技有限公司与时识科技（SynSense）严格分离；WTM-8 量产、客户订单与产品承接待核验。

## [2026-08-12] ingest | 硅基流动（SiliconFlow）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-硅基流动SiliconFlow-横纵分析报告.md
- Updated: 新建 硅基流动（SiliconFlow）；新建 硅基流动（SiliconFlow）主体、IP与商业化尽调；更新 8 其他，5.2/4.2/4.4 仅条件性观察。
- Classification: 主 8 其他；无正式次分类。模型 API、预留容量、MaaS 与私有化部署的签约主体、IP、合同、收入、SLA 及生产能力尚未闭环。

## [2026-08-12] ingest | 端脑科技（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-端脑科技-横纵分析报告.md
- Updated: 新建 端脑科技（英文名待核验）；新建 端脑科技主体、品牌与商业承接尽调；更新 8 其他，4.4 仅条件性观察。
- Classification: 主 8 其他（低置信）；无正式次分类。Cephalon Cloud／端脑云的品牌、合同、收入、资源与 IP 未能归属端脑科技（无锡）有限公司。

## [2026-08-12] ingest | 第四范式（4Paradigm）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-第四范式4Paradigm_横纵分析报告.md
- Updated: 新建 第四范式（4Paradigm）；新建 第四范式平台收入、机器人协同与权利边界尽调；更新 5.4 推理应用编排与知识库框架、5.1/5.2 功能性次类。
- Classification: 主 5.4 推理应用编排与知识库框架；正式功能性次类 5.1/5.2。AI Platform 收入不能写为纯 SaaS ARR，未披露机器人客户、VLA/控制/动作数据订单或收入。

## [2026-08-12] ingest | 芯原股份（VeriSilicon）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-芯原股份VeriSilicon_横纵分析报告.md
- Updated: 新建 芯原股份（VeriSilicon）；新建 芯原股份IP资产、客户交付与机器人SoC适配尽调；更新 1.3 NPU。
- Classification: 主 1.3 NPU；无正式次分类。NPU IP 与 SiPaaS 定制交付不等于销售标准 NPU ASIC，客户交付、IP资产、供应和机器人 SoC 适配待核验。

## [2026-08-12] ingest | 观测云（Guance）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-guance-zhuyun-横纵分析报告.md
- Updated: 新建 观测云（Guance）；新建 观测云主体承接、数据责任与可交易资产尽调；更新 3.7 监控与健康管理软件（条件性观察）。
- Classification: 3.7 监控与健康管理软件仅条件性观察；无正式次分类。常州主体的合同、数据处理、IP、客户、收入与服务责任承接尚未闭环。

## [2026-08-12] ingest | 谐云科技（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-谐云科技_横纵分析报告.md
- Updated: 新建 谐云科技（英文名待核验）；新建 谐云科技主体、IP与商业化尽调；更新 3.4 容器化软件、3.6/3.7 正式次类，3.5/4.1 条件性观察。
- Classification: 主 3.4 容器化软件；正式次类 3.6/3.7。乾坤鼎及异构方案不外推为跨厂商训练/推理调度；主体、IP、版本、SLA、生产验收与独立收入待核验。

## [2026-08-12] ingest | 超智算（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-超智算_横纵分析报告.md
- Updated: 新建 超智算（英文名待核验）；新建 超智算融资、园区资产与交付能力尽调；更新 8 其他，3.3/4.4 仅条件性观察。
- Classification: 主 8 其他（低置信）；无正式次分类。35亿元、4500P、3000P点亮、PUE和“全国算力一张网”均为规划/方向，未证明实际验收、客户、收入、利用率、资产承接或自研跨厂商调度。

## [2026-08-12] ingest | 超聚变（xFusion）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-超聚变xFusion_横纵分析报告.md
- Updated: 新建 超聚变（xFusion）；新建 超聚变股权、供应与液冷交付尽调；更新 3.3 算力中心集成、3.2 数据中心散热。
- Classification: 主 3.3 算力中心集成；正式次类 3.2 数据中心散热。第三方部件、服务器、机柜、供电、液冷和服务组合是收入/交付承载物；股权、供应、液冷项目验收和独立收入待核验。

## [2026-08-12] ingest | 趋境科技（Approaching.AI）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-趋境科技ApproachingAI-横纵分析报告.md
- Updated: 新建 趋境科技（Approaching.AI）；新建 趋境科技主体、IP与Token生产服务尽调；更新 4.3 推理跨XPU异构调度、4.2 推理PD分离、4.4 多厂商算力池。
- Classification: 主 4.3 推理跨XPU异构调度；正式次类 4.2/4.4。主体/合同承接、开源及清华技术成果权属、客户回款和跨XPU生产 SLA 尚未闭环；4.1 不成立。

## [2026-08-12] ingest | 轨道辰光（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-轨道辰光_横纵分析报告.md
- Updated: 新建 轨道辰光（英文名待核验）；新建 轨道辰光主体、轨道计算产品与商业交付尽调；更新 8 其他。
- Classification: 主 8 其他（低置信）；无正式次分类。没有可核验产品、任务、客户、收入或交付证据，维持技术雷达，不采购、投资或并购。

## [2026-08-12] ingest | 进化动力（Evomotion）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-进化动力Evomotion-横纵分析报告.md
- Updated: 新建 进化动力（Evomotion）；新建 进化动力主体、量产与机器人供给尽调；更新 1.3 NPU。
- Classification: 主 1.3 NPU（低—中置信）；无正式次分类。EvoSense 边缘 NPU、算法工具与垂直 AIoT 产品面不证明量产、供货、收入或机器人交付；5.2 不成立。

## [2026-08-12] ingest | 边塞科技（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-边塞科技_横纵分析报告.md
- Updated: 新建 边塞科技（英文名待核验）；新建 边塞科技主体、品牌与交易边界尽调；更新 8 其他。
- Classification: 主 8 其他；无正式次分类。候选法人、媒体品牌、融资和蚂蚁收购报道未形成主体、产品、资产、客户或商业承接闭环，4.1 不成立。

## [2026-08-12] ingest | 重庆云算通（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-重庆云算通_横纵分析报告.md
- Updated: 新建 重庆云算通（英文名待核验）；新建 重庆云算通主体、资产与智算服务商业化尽调；更新 8 其他。
- Classification: 主 8 其他（低置信）；无正式次分类。GPU云、集成项目、调度软件、资产、客户、收入与交付均未获承重证据；取得可审计 GPU 云交付前不纳入 3.3 或 4.4。

## [2026-08-12] ingest | 平头哥（T-Head）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-阿里巴巴平头哥_横纵分析报告.md
- Updated: 新建 平头哥（T-Head）；新建 平头哥主体、资产边界与外部产品化尽调；更新 1.3 NPU。
- Classification: 主 1.3 NPU；无正式次分类。含光 800 产品发布与阿里内部应用有证据；阿里体系相关主体/资产不自动并入平头哥，外售、SDK、外部客户、供应/SLA 与机器人适配待核验。

## [2026-08-12] ingest | 青云科技（QingCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-青云科技QingCloud_横纵分析报告.md
- Updated: 新建 青云科技（QingCloud）；新建 青云科技KubeSphere、GPU服务与持续性尽调；更新 3.6 集群管理软件、3.4 容器化软件、3.5 调度与编排软件。
- Classification: 主 3.6 集群管理软件；正式次类 3.4/3.5。AI算力云已有收入，但未证实大规模低成本跨厂商训练平台；KubeSphere/QKE 版本、许可证、权属、GPU资产/租赁、容量和生产 SLA 待 P0 核验。

## [2026-08-12] ingest | 飞致云（FIT2CLOUD）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-飞致云FIT2CLOUD_横纵分析报告.md
- Updated: 新建 飞致云（FIT2CLOUD）；新建 飞致云资产、融资与AI集群交付尽调；更新 3.6 集群管理软件、3.7 监控与健康管理软件，3.4 条件性观察。
- Classification: 主 3.6 集群管理软件；正式次类 3.7。CloudExplorer 多云/多 Kubernetes 管理和 Prometheus 监控可支持受控 PoC；开源组合、客户案例、融资新闻与 Zabbix 联合方案不等同合同、收入、IP 或训练集群交付。

## [2026-08-12] ingest | 鸿策数据（英文名待核验）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-鸿策数据_横纵分析报告.md
- Updated: 新建 鸿策数据（英文名待核验）；新建 鸿策数据主体、近名广州主体与数据服务商业化尽调；更新 8 其他，7 数据服务仅条件性观察。
- Classification: 主 8 其他（低置信）；无正式次分类。深圳主体的产品、数据权属、客户、合同、收入与交付未核验；广州近名主体的港交所交易、业务与金额明确隔离。

## [2026-08-12] ingest | 黑芝麻智能（Black Sesame Technologies）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-黑芝麻智能BlackSesameTechnologies_横纵分析报告.md
- Updated: 新建 黑芝麻智能（Black Sesame Technologies）；新建 黑芝麻智能A2000、SesameX与易创智芯商业化尽调；更新 1.3 NPU。
- Classification: 主 1.3 NPU；无正式次分类。车规智能驾驶 SoC 与方案交付为客户购买和收入承载核心；SesameX收入拆分、A2000量产、机器人交付与易创智芯收购后协同待核验。

## [2026-08-12] lint | 0 fidelity/Raw-reference issues, 0 auto-fixed
- Scope: 本批次 24 篇目录扫描报告对应的 24 个公司页及 24 个开放问题页。
- Verified: 0 个证据保真候选；0 个 Raw 引用错误；任务清单 0 项未勾选；345 个清单 Raw/wiki 链接均可解析；24 个公司页标题及 35 个正式/条件性 segment 名单归属已复核。
- Note: 387 个未引用 Raw 文件为全库既有待办；本批新增 Raw 均已由对应公司页和开放问题页引用。

## [2026-08-12] lint | Raw 保真迁移复核，0 fidelity/Raw-reference issues, 0 auto-fixed
- Scope: 10 篇此前仅保存关键摘录的目录扫描报告（Astera Labs、Axelera AI、Ayar Labs、Broadcom、CAST AI、CoreWeave、趋动科技、芯原股份、迈特芯、云脉芯联）及其 16 个公司／开放问题页面。
- Verified: 已新增 10 份格式正确、正文逐字保留的 `-4` Raw 副本并迁移 36 个有效引用；追踪清单内 126 篇目录扫描报告均具完整 Raw 正文覆盖，0 项未勾选。
- Note: 旧摘录 Raw 与生成过程中的 `-2`／`-3` Raw 均按不可变规则保留且不再有有效页面引用；因此全库未引用 Raw 数会相应增加，不构成本批证据错误。

## [2026-08-12] lint | 目录扫描导入任务收口，0 scoped issues, 0 auto-fixed
- Scope: `横纵研究报告导入任务追踪清单.md` 的 126 篇目录扫描报告、125 个公司页及其 segment 归属。
- Verified: 0 项未勾选；471 个清单链接均可解析；126 份报告均由完整 Raw 覆盖（104 份全文连续保留，22 份仅因既有 Raw 模板在 H1 后插入元数据而分隔，正文完整）；125 个公司页标题符合命名约定且均出现在至少一个 segment 名单中。
- Backlog boundary: 全库 `check_evidence.py` 仍报 46 个 fidelity suspects、43 个 evidence errors、419 个未引用 Raw；其中 segment 页面缺少 Raw 为现有结构性报告，且不属于本批导入的 Raw／公司页链接错误，未在本次范围内改写。

## [2026-08-12] lint | Raw 保真迁移说明更正
- Correction: 上一条 Raw 保真迁移记录中“不再有有效页面引用”的 `-2`／`-3`，仅指 Astera Labs、Axelera AI、Ayar Labs、Broadcom、CAST AI、CoreWeave、趋动科技、芯原股份、迈特芯、云脉芯联这 10 份迁移产生的副本；瞻芯科技与趋境科技的既有 `-2` Raw 仍为正确、完整且有效引用的副本，不受该说明影响。

## [2026-08-12] maintenance | 公司页名称清理
- Updated: 清除 16 个 `wiki/companies/` 页面标题、`wiki/index.md` 显示名及相关内部链接中的“英文名待核验”；其中瞻芯科技、端脑科技、谐云科技、超智算、轨道辰光、边塞科技、重庆云算通、鸿策数据的 8 个文件名同步重命名。
- Verified: 已核查当前 wiki 页面名、索引、问题页和 segment 页不存在该标记；本次 8 个重命名公司页的 evidence/Raw 检查为 0 个问题。

## [2026-08-12] ingest | S3 Graphics（跨公司 GPU 人才来源机构页）
- Disposition: New
- Raw: raw/sources/2026-08-10-国内算力公司的人才来源.md
- Raw: raw/sources/2026-08-06-砺算科技_横纵分析报告.md
- Updated: 新建 S3 Graphics；回链更新 周鸿、赵立东、清华大学、壁仞科技（Biren Technology）、燧原科技（Enflame）、砺算科技（Lisuan）、AMD。
- Classification: 无正式产业链分类（机构页不进入 segment 名单）。关系类型：周鸿（C，关键个人来源）、赵立东（C，关键个人来源）、砺算科技三位联合创始人（A/边界案例，整建制来源）。不隐含 IP、投资或股权关系；不做跨公司技术路线推断。

## [2026-08-12] ingest | 苏黎世神经信息研究所（Institute of Neuroinformatics）机构页
- Disposition: New
- Raw: raw/sources/2026-08-06-时识科技_横纵分析报告.md
- Updated: 新建 苏黎世神经信息研究所；回链更新 时识科技（SynSense）。
- Classification: 无正式产业链分类（机构页不进入 segment 名单）。关系类型：B（科研成果转化/孵化），乔宁与所长 Giacomo Indiveri 共同创立时识科技。官网自述不视为经审计的 IP 转让证据；单一公司证据不足以升级为 A 类组织型人才母体。

## [2026-08-12] correction | 修正海光信息（Hygon）"尚未建立独立公司页"过时措辞
- Disposition: Update
- Updated: AMD、中国科学院计算技术研究所、中科曙光、沙超群、刘新春。
- Reason: 海光信息（Hygon）公司页已建立，上述 5 篇页面仍保留旧措辞"尚未在本知识库建立独立公司页"，现已改为指向已建立的公司页内部链接，并保留"人才关系不外推为资源供给、订单、IP 或控制权"的边界说明；同步移除相应已完成的"待公司页建立后回链"后续研究方向条目。
- Verified: 寒武纪（Cambricon）相关引用此前已正确链接，无需变更。
# [2026-08-12] maintenance | 新增第8类二级分类
- Updated: 新建 `8.2 量子计算`、`8.3 空间／轨道计算`；更新 `产业链分类规则.md`、`产业链公司分类总表.md`、`wiki/segments/8-其他.md`、`wiki/index.md` 及 8 家公司页。
- Classification: 图灵量子、矩量光启、两仪万象、奇算光启归入 `8.2`；星用空间、轨道辰光、一苇宇航、智算星空归入 `8.3`。两类均为观察型研究簇，不代表产品化、客户、定价、交付或相对 GPU/HPC 的机器人优势已证实；空间／轨道计算不合并卫星载荷、在轨计算、地面算力和空间数据服务商业模式。

## [2026-08-12] maintenance | 1 芯片硬件二级分类重排与正式编号
- Updated: `产业链分类规则.md`；`wiki/segments/1-芯片硬件.md`；`1.4–1.14` 芯片硬件二级分类页；相关公司页、尽调问题页、`产业链公司分类总表.md` 与 `wiki/index.md`。
- Classification: 按计算、存储、通信/数据面、独立专用架构的资源路径重排；图形 GPU、光子/光电计算和存算一体/近存计算前移至 `1.4–1.6`，HBM 保留 `1.7`，Scale-up/Scale-out 与 DPU 定为 `1.8–1.10`，FPGA、类脑和 LPU 定为 `1.11–1.13`，`1.14` 成为不含已独立类型的最终兜底项。

## [2026-08-12] ingest | 北京大学先进集成光子芯片实验室（机构页）
- Disposition: New
- Raw: raw/sources/2026-08-12-pku-photonics-lab-roster.md
- Raw: raw/sources/2026-08-12-pku-changlin-faculty-page.md
- Raw: raw/sources/2026-08-11-启明光子横纵分析报告.md
- Updated: 新建 北京大学先进集成光子芯片实验室；回链更新 启明光子（Qiming Photon）。
- Classification: 无正式产业链分类（机构页不进入 segment 名单）。关系类型：B（科研成果转化/孵化），实验室自有博士后名单列有张磊，独立专访确认其为启明光子 CEO。张磊是否仍在职博士后与创业身份的时间关系未澄清，已在边界说明中标注；单一公司证据不足以升级为 A 类组织型人才母体。

## [2026-08-12] ingest | 兆芯（Zhaoxin）（机构页）
- Disposition: New, Disputed
- Raw: raw/sources/2026-08-12-lisuan-dianchang-36kr-investigation.md
- Raw: raw/sources/2026-08-12-xuanyifang-baidu-baike.md
- Updated: 新建 兆芯（Zhaoxin）；回链更新 格兰菲（Gelanfei）、砺算科技（Lisuan）、砺算科技关键尽调问题。
- Classification: 无正式产业链分类（机构页不进入 segment 名单）。关系类型：A（组织型人才母体），格兰菲的兆芯 GPU 团队渊源为已确认案例；兆芯→中天恒星→砺算科技链条来自 36氪转载"电厂"调查报道（匿名信源），与砺算科技创始人宣以方本人的百度百科自述履历（完全未提兆芯或中天恒星）存在正面冲突，标记为 Status: Disputed，保留双方证据，不做裁定。

## [2026-08-12] ingest | 唐志敏专访（中国企业家）：象帝先/中科曙光/中科院计算所人才链条补充
- Disposition: Update
- Raw: raw/sources/2026-08-12-tangzhimin-zhongguo-qiyejia-interview.md
- Updated: 象帝先（Xiangdixian）、中科曙光、中国科学院计算技术研究所。
- Reason: 专访原文确认唐志敏完整任职链条（中科院计算所→龙芯课题组→中科曙光CTO→海光信息总裁→象帝先创始人），并披露现任象帝先总经理张珩、研发一号位李文同样从海光信息转入象帝先；中科曙光机构页新增"人才输出"部分记录该出口侧关系，中科院计算所机构页补充唐志敏与胡伟武/陈天石/陈云霁的师承关系（专访自述，未逐一核实强度），象帝先公司页的既有 Status: Disputed 区块（2024 年融资金额分歧）保持不变。
- Classification: 关系类型 A（组织型人才母体，海光信息→象帝先）；唐志敏的"龙芯"渊源确认为中科院计算所内部课题组，非独立法人机构，维持此前"不单独建龙芯机构页"的决定不变。

## [2026-08-12] no material: 深圳市大数据研究院、龙芯（Loongson）/龙芯中科对外人才与技术输出核查
- Disposition: No material
- 深圳市大数据研究院对外人才输出证据不足以支撑独立机构页，已有关联（智子芯元）在公司页层面记录；龙芯团队为中科院计算所内部课题组，非独立法人机构，人才输出证据已并入中国科学院计算技术研究所机构页，均不新建独立机构页。

## [2026-08-12] lint | 52 issues found, 52 auto-fixed
- Replaced 50 unsupported `wiki/companies/` → `wiki/segments/` Markdown links with plain text; the affected statements remain as non-classification boundaries or conditional observations.
- Updated: `wiki/segments/8.1-云与AI算力服务.md` to add Baseten and Fireworks AI as supported formal primary-category entries.
- Verification: all 229 remaining company-to-segment links have a matching company link on their target segment page.
# [2026-08-12] research | 博思芯宇横纵分析报告
- Added: `横纵研究报告/博思芯宇_横纵分析报告.md` and PDF companion.
- Evidence: company BP/Memo treated as high-confidence private material with promotional-risk labels; public materials used for industry and competitor cross-checks.
- Added Raw public-evidence companion: `raw/sources/2026-08-12-bosixinyu-public-evidence.md`, covering the company site, Hangzhou entity line, financing reports and Qingyang government project page.
- Judgment: SLM problem is real and potentially synergistic with humanoid-robot compute/chip strategy, but software versus server revenue, customer validation, financing terms, IP ownership and production metrics remain open; recommend gated PoC and conditional strategic investment before acquisition.
- Classification: appended a dedicated classification analysis to the report; final position is primary `3.7 监控与健康管理软件`, formal secondary `3.6 集群管理软件`; `5.5`/`3.3`/`8.1` remain conditional observations, while `4.4`/`4.1`/`4.3` and chip-hardware categories do not meet current evidence thresholds.

## [2026-08-13] update | 博思芯宇横纵分析报告
- Disposition: Update
- Source: `横纵研究报告/博思芯宇_横纵分析报告_公开资料版.md` 第八节及其公开资料来源
- Updated: `横纵研究报告/博思芯宇_横纵分析报告.md`；同步更新 `wiki/index.md`
- Changes: 补入官网 4S 定义、19 参数多信道采集与异常检测算法口径；将机柜转租+代运营作为独立商业模式并补充资产、SLA、现金流风险；补入公开融资轮次与 Pre-A1 投资方；将官网自述、政府披露业务量、私域收入/性能数字和客户线索按证据等级拆分，保留待核事项。

## [2026-08-13] ingest | Cloudera
- Disposition: New
- Raw: raw/sources/2026-08-12-cloudera-taikun-business-line-hv-analysis-report.md
- Updated: 3.6 集群管理软件；ClouderaTaikun收购范围与商业化尽调。
- Classification: 主类型 3.6 集群管理软件。收购公告与产品／文档迁移支持 Taikun 已成为 Cloudera 产品线；资产、合同、旧股东、独立 SKU、收入、客户与生产 SLO 未公开，故不列入 3.5、4.1、4.3 或 4.4。

## [2026-08-13] ingest | 安桢瑞
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-安桢瑞_横纵分析报告.md
- Updated: 新建 安桢瑞；新建 安桢瑞主体、许可与技术服务商业化尽调；更新 8 其他。
- Classification: 主类型 8 其他；不设正式次分类。主体已定位，但招聘岗位、经营范围、许可及订单索引不足以证明 AI infra 产品、客户收入或自有技术 IP；注册资本、许可证、订单、劳动合规与技术交付边界保留开放尽调。

## [2026-08-13] update | AI计算芯片硬件公司产品布局矩阵
- Disposition: New
- Updated: 新建 wiki/comparisons/AI计算芯片硬件公司产品布局矩阵.md；更新 wiki/index.md
- Scope: 纳入直接承载模型计算的 GPGPU、TPU、NPU、图形 GPU、光子/光电计算、存算一体/近存计算、类脑、LPU 与其他 AI 芯片架构；排除 DPU/SmartNIC、HBM、Scale-up/Scale-out 互联和纯系统集成。
- Method: 产品线使用 ✓/△/→/?/— 状态；最新产品名称只引用公司页及其 Raw 中已出现的具名产品；未把路线图或关联主体产品自动计入母公司。

## [2026-08-13] update | AI计算芯片硬件公司产品布局矩阵 — 添加归类总结
- Disposition: Update
- Updated: wiki/comparisons/AI计算芯片硬件公司产品布局矩阵.md
- Change: 在页面顶部新增按核心产品类型归类的五组总结（云端训练+推理全栈、云端推理为主、边缘+端侧SoC平台、边缘推理加速、新兴/前沿架构）及总体格局矩阵和关键观察；原始口径说明与完整产品覆盖矩阵表保留在底部。

## [2026-08-13] ingest | 数澜科技（DTWave）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-13-数澜科技-横纵分析报告.md
- Updated: 新建 数澜科技（DTWave）；新建 数澜科技主体、产品与商业化尽调；更新 7 数据服务。
- Classification: 主类型 7 数据服务，中等置信，不设正式次分类。数栖数据平台与行业实施支持数据工程、治理、资产化和数据服务定位；企业大模型、智能体、容器云、模型训推、GPU 调度和千卡/万卡项目均未满足独立 SKU、计费、外部验收、支持矩阵或生产 SLA 的分类证据要求。武汉资金的 B++ 与 `2,000` 万元股权投资奖励口径冲突，已保留开放尽调。

## [2026-08-13] ingest | 星宇智算（StarverseAI）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-13-星宇智算-横纵分析报告.md
- Updated: 新建 星宇智算（StarverseAI）；新建 星宇智算主体、域名、合同与IP尽调；更新 8 其他。
- Classification: 主类型 8 其他（低置信），不设正式次分类。网站展示 GPU 实例、模型 API 与 AIGC 应用，但候选法人、域名、备案、平台账户、合同/收款、资源与模型 IP 未闭环，故不列入 8.1 云与 AI 算力服务。

## [2026-08-13] ingest | 腾讯云（Tencent Cloud）
- Disposition: New
- Raw: raw/sources/2026-08-13-tencent-cloud-hv-analysis-report.md
- Updated: 新建 腾讯云（Tencent Cloud）；新建 腾讯云主体、区域、模型 API 与机器人交付尽调；更新 8.1 云与 AI 算力服务。
- Classification: 主类型 8.1 云与 AI 算力服务，高置信；不设正式次分类。腾讯云的客户购买物为按订阅期或资源消耗计费的计算、存储、网络、数据库、云平台和模型服务；内部容器、调度、模型运行时或多区域管理不构成 3.5、4.1、4.3、4.4 或 5.1—5.5 的独立交付证据。腾讯云为品牌及区域合同/交付体系，腾讯云计算（北京）有限责任公司仅为中国境内法人锚点，不外推为所有订单或区域的唯一合同主体。

## [2026-08-13] ingest | 软通云（SoftCloud）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-12-软通云_横纵分析报告.md
- Updated: 新建 软通云（SoftCloud）；新建 软通云主体、iSS Cloud 归属与商业承接尽调；更新 8 其他。
- Classification: 主类型 8 其他（低置信），不设正式次分类。可确认深圳软通云为软通动力以权益法核算的联营企业；iSS Cloud 的产品/IP、云市场账户、合同、收入和服务责任是否由该法人承接未闭环，故不列入 8.1、3.5、3.6、4.1、4.3 或 4.4。

## [2026-08-13] ingest | 麒麟软件（Kylinsoft）
- Disposition: New; Disputed
- Raw: raw/sources/2026-08-13-麒麟软件Kylinsoft-横纵分析报告.md
- Updated: 新建 麒麟软件（Kylinsoft）；新建 麒麟软件主体、智算OS与机器人部署尽调；更新 8 其他。
- Classification: 主类型 8 其他（国产操作系统／信创基础软件），不设正式次分类。智算 OS、容器、Kubernetes、异构资源管理与 DeepSeek 适配只支持国产 AI 部署环境延伸，不证明独立调度 SKU、跨 XPU 控制面、推理运行时或机器人实时控制能力。中国软件 `20` 亿元再融资与麒麟软件“增资扩股 `30` 亿元”的口径、openKylin 权利及机器人部署证据保留开放尽调。

## [2026-08-13] ingest | proteanTecs
- Disposition: New; Update; Disputed
- Raw: raw/sources/2026-08-13-proteantecs-横纵分析报告.md
- Updated: 新建 proteanTecs；更新 proteanTecs主体、合同边界与分类尽调；更新 8 其他。
- Classification: 主类型 8 其他（半导体全生命周期监测 IP 与分析平台），不设正式次类型。设计期嵌入 Agent/IP、集成工具与生产/现场分析是客户购买物，不作为普通 3.7 集群监控软件；合同、IP、收入和跨境数据边界未闭环。

## [2026-08-13] lint | 横纵研究报告导入任务追踪清单收口，0 scoped issues, 0 auto-fixed
- Scope: `横纵研究报告/` 及其子目录的 219 篇 `*横纵分析报告*.md`，以及本批 13 个公司页与对应分类名单。
- Verified: 根目录 0 篇未归档报告；清单 0 项待导入；13 个新增公司页均按中文简称（英文名）或海外原始名称命名，且均存在正式 segment 名单归属；本批公司页的 evidence/Raw 检查为 0 个 fidelity suspect、0 个 evidence error。
- Note: 全库仍有 434 个未引用 Raw 提醒，属于既有 backlog，未作为本批 Raw／公司页引用错误处理。

## [2026-08-14] ingest | 端侧训练芯片（On-Device Training Chip）
- Disposition: New
- Raw: raw/sources/2026-08-14-端侧训练芯片_横纵分析报告.md
- Updated: 新建 wiki/technologies/端侧训练芯片（On-DeviceTraining）.md；更新 wiki/index.md technologies 段；更新 wiki/synthesis/训练芯片孵化证据与人才方向.md（方向D增加交叉引用）。
- Summary: 新建技术页面，系统介绍端侧训练芯片的技术概念、五级成熟度光谱（L0–L5）、四条技术路线（反向传播压缩、神经形态、前向传播、存算一体）、竞争格局、产业窗口判断（2026–2028）及三个产业剧本（最可能：推理芯片+软件；最危险：NVIDIA Jetson率先实现；最乐观：神经形态创造独立品类）。文中提出"端侧训练不在任何主流边缘AI芯片的产品路线图上"的产业判断，并给出人才来源和孵化建议。
