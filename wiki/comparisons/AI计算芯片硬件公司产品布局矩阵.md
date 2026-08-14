# AI计算芯片硬件公司产品布局矩阵

> Sources: 知识库公司档案与其引用的公开资料，研究截止日 2026-08-13
> Raw: [NVIDIA](../../raw/sources/2026-08-11-nvidia-横纵分析报告.md); [AMD](../../raw/sources/2026-08-11-amd-hv-analysis-report.md); [Google](../../raw/sources/2026-08-11-google-hv-analysis-report.md); [AWS](../../raw/sources/2026-08-11-amazon-web-services-aws-hv-analysis-report.md); [Intel](../../raw/sources/2026-08-11-intel-横纵分析报告.md); [Altera](../../raw/sources/Altera横纵分析报告.md); [Cerebras](../../raw/sources/2026-08-11-cerebras-systems-hv-analysis-report.md); [Graphcore](../../raw/sources/2026-08-11-graphcore-hv-analysis-report.md); [Groq](../../raw/sources/2026-08-11-groq-hv-analysis-report.md); [Hailo](../../raw/sources/2026-08-11-hailo-横纵分析报告.md); [Lightmatter](../../raw/sources/2026-08-11-lightmatter-横纵分析报告.md); [Tenstorrent](../../raw/sources/2026-08-11-tenstorrent-横纵分析报告.md); [华为昇腾](../../raw/sources/2026-08-11-华为昇腾-横纵分析报告.md); [寒武纪](../../raw/sources/2026-08-11-寒武纪_横纵分析报告.md); [昆仑芯](../../raw/sources/2026-08-06-昆仑芯_横纵分析报告.md); [天数智芯](../../raw/sources/2026-08-06-天数智芯_横纵分析报告.md); [燧原科技](../../raw/sources/2026-08-06-燧原科技Enflame_横纵分析报告.md); [燧原软件](../../raw/sources/2026-08-07-enflame-topsrider-platform.md); [沐曦](../../raw/sources/2026-08-06-沐曦集成电路_横纵分析报告.md); [海光信息](../../raw/sources/2026-08-12-海光信息-横纵分析报告.md); [壁仞科技](../../raw/sources/2026-08-06-壁仞科技_横纵分析报告.md); [摩尔线程](../../raw/sources/2026-08-06-摩尔线程_横纵分析报告.md); [象帝先](../../raw/sources/2026-08-06-象帝先_横纵分析报告.md); [砺算科技](../../raw/sources/2026-08-06-砺算科技_横纵分析报告.md); [瀚博半导体](../../raw/sources/2026-08-10-瀚博半导体-横纵分析报告-修订版.md); [登临科技](../../raw/sources/2026-08-06-登临科技_横纵分析报告.md); [算能科技](../../raw/sources/2026-08-06-算能科技Sophgo_横纵分析报告.md); [瑞芯微](../../raw/sources/2026-08-12-瑞芯微Rockchip_横纵分析报告.md); [地瓜机器人](../../raw/sources/2026-08-11-地瓜机器人-d-robotics-横纵分析报告.md); [地平线](../../raw/sources/2026-08-11-地平线-horizon-robotics-横纵分析报告.md); [黑芝麻智能](../../raw/sources/2026-08-12-黑芝麻智能BlackSesameTechnologies_横纵分析报告.md); [后摩智能](../../raw/sources/2026-08-06-后摩智能HoumoAI_横纵分析报告.md); [知存科技](../../raw/sources/2026-08-12-知存科技Witmem_横纵分析报告.md); [知存主体](../../raw/sources/2026-08-10-witmem-official-website-legal-entity.md); [九天睿芯](../../raw/sources/九天睿芯_横纵分析报告.md); [时识科技](../../raw/sources/2026-08-06-时识科技_横纵分析报告.md); [灵汐科技](../../raw/sources/2026-08-12-灵汐科技Lynxi横纵分析报告.md); [清微智能](../../raw/sources/2026-08-06-清微智能TSingMicro_横纵分析报告.md); [熠知电子](../../raw/sources/熠知电子_横纵分析报告_修订版.md); [爱芯元智](../../raw/sources/2026-08-06-爱芯元智Axera_横纵分析报告.md); [超星未来](../../raw/sources/2026-08-10-超星未来_横纵分析报告.md)
> Updated: 2026-08-13 (verified)

## 按核心产品类型归类的总结

本页覆盖 39 家 AI 计算芯片公司，按核心产品类型分为以下五类：

### 一、云端训练+推理（全栈数据中心芯片）

训练和推理两侧均有已验证产品（✓）的公司，竞争最密集、壁垒最高的赛道。按技术路线分组排序。

| 排序 | 公司 | 技术路线 | 训练 | 推理 | 超节点 | 备注 |
|---|---|---|---|---|---|---|
| — | **1.1 GPGPU** | | | | | |
| 1 | [NVIDIA](../companies/NVIDIA.md) | 1.1 GPGPU | ✓ H100/H200/B200/GB200 | ✓ H100/H200/B200/GB200 | ✓ GB200 NVL72；△ GB300 NVL72；→ Vera Rubin | 全栈标杆，Blackwell 全面量产 |
| 2 | [AMD](../companies/AMD.md) | 1.1 GPGPU | ✓ MI300X/MI325X | ✓ MI300X/MI325X | △ MI300 机架方案 | MI355X(CDNA4)原计划 2025H2 量产，超节点和嵌入式待核 |
| 3 | [Intel](../companies/Intel.md) | 1.1 GPGPU | ✓ Gaudi 3（营收目标 $500M 未达成，Falcon Shores 已取消） | ✓ Gaudi 3（生态和客户采纳度低于 NVIDIA/AMD） | △ Gaudi 3 rack-scale 待核；Jaguar Shores 路线图待确认 | Gaudi 3 出货量低于预期 |
| 4 | [壁仞科技（BirenTechnology）](../companies/壁仞科技（BirenTechnology）.md) | 1.1 GPGPU | ✓ 壁砺166M/166L | ✓ 壁砺166C | △ 多卡系统待核 | 推理由 △ 升级为 ✓，产品更名壁砺系列 |
| 5 | [昆仑芯（Kunlunxin）](../companies/昆仑芯（Kunlunxin）.md) | 1.1 GPGPU | ✓ R480-X8；第三代待核 | ✓ R200 | △ 32/64 卡 | 官网 403 无法更新，缺乏 2025 年后产品更新 |
| 6 | [海光信息（Hygon）](../companies/海光信息（Hygon）.md) | 1.1 GPGPU-like | ✓ 深算 DCU；代际待核 | ✓ DCU 系列 | △ DCU 集群 | 代际更新（如深算三号）缺乏公开验证证据 |
| 7 | [天数智芯（IluvatarCoreX）](../companies/天数智芯（IluvatarCoreX）.md) | 1.1 GPGPU | ✓ 天垓系列；代际待核 | ✓ 智铠系列 | △ 训推集群 | 代际和集群待核 |
| 8 | [沐曦（MetaX）](../companies/沐曦（MetaX）.md) | 1.1 GPGPU | ✓ 曦云 C500 | ✓ 曦思 N 系列 | — | 训练+推理 ✓，无超节点 |
| — | **1.2 TPU / TPU-like** | | | | | |
| 9 | [Google](../companies/Google.md) | 1.2 TPU | ✓ TPU v5p/Trillium | ✓ TPU v5e/Trillium | ✓ TPU Pod/Supercomputer | 超节点由 △ 升级为 ✓，Trillium 已全面 GA |
| 10 | [AWS](../companies/AWS.md) | 1.2 TPU-like | ✓ Trainium2 | ✓ Inferentia2；△ Inferentia3 | ✓ Trn2 UltraServer（64 芯片互联） | 训练/推理/超节点均已验证，Inferentia3 量产待确认 |
| — | **1.3 NPU** | | | | | |
| 11 | [华为昇腾（Ascend）](../companies/华为昇腾（Ascend）.md) | 1.3 NPU | ✓ 910B/910C；△ 910D（送样） | ✓ 310/310P；910C 已部署 DeepSeek R1 推理 | ✓ Atlas 900/CloudMatrix 384（384 张 910C，全光互联） | 国内唯一全栈 ✓，910C 年出货 80 万+片 |
| 12 | [寒武纪（Cambricon）](../companies/寒武纪（Cambricon）.md) | 1.3 NPU | ✓ 思元370；思元590待核 | ✓ MLU220/370 | △ MLU-Link/集群 | 思元590 未出现在官网产品页，量产待核 |
| — | **1.14 其他架构** | | | | | |
| 13 | [Cerebras](../companies/Cerebras.md) | 1.14 Wafer-Scale | ✓ CS-3/WSE-3 | ✓ CS-3/WSE-3 | ✓ CS-3 集群 | 推理业务增长显著（AMD 合作、OpenAI 部署） |
| 14 | [燧原科技（Enflame）](../companies/燧原科技（Enflame）.md) | 1.14 GCU | ✓ 云燧/OGX | ✓ S60 | ✓ 云燧超节点 | 国内 GCU 路线唯一全栈 ✓ |
| 15 | [Graphcore](../companies/Graphcore.md) | 1.14 IPU | ✓ Bow IPU（Legacy） | ✓ Bow IPU（Legacy） | △ IPU-POD（Legacy） | Bow IPU 归入 Legacy Products，无新代际 |

### 二、云端推理为主

推理侧有已验证产品（✓），训练侧或无（—）或仅待验证（△）。按技术路线分组排序。

| 排序 | 公司 | 技术路线 | 推理 | 训练 | 超节点 | 备注 |
|---|---|---|---|---|---|---|
| — | **1.1 GPGPU** | | | | | |
| 4 | [摩尔线程（MooreThreads）](../companies/摩尔线程（MooreThreads）.md) | 1.1 GPGPU | ✓ MTT S5000/S4000/S3000 | △ S5000/KUAE 平台 | △ SGX5000/多卡服务器 | 推理+边缘 ✓，训练待核；2025年12月上市 |
| 5 | [瀚博半导体（Vastai）](../companies/瀚博半导体（Vastai）.md) | 1.1 GPGPU | ✓ VA1/VA10 | △ 交付待核 | △ 集群方案 | 推理 ✓，训练交付待核 |
| — | **1.13 LPU** | | | | | |
| 1 | [Groq](../companies/Groq.md) | 1.13 LPU | ✓ LPU 卡/系统（256 LPU/rack，315 PFLOPS FP8） | — | ✓ LPU Rack（256 LPU） | 超节点由 △ 升级为 ✓；新增 LPX 产品线；$650M 融资 |
| — | **1.14 其他架构** | | | | | |
| 2 | [Tenstorrent](../companies/Tenstorrent.md) | 1.14 Tensix/RISC-V | ✓ Wormhole/Blackhole | △ Blackhole 已开售（$999 起） | ✓ Galaxy 系统（$70,000 起售） | 超节点由 △ 升级为 ✓；新增 TT-QuietBox、TT-Ascalon S |
| 3 | [清微智能（TsingMicro）](../companies/清微智能（TsingMicro）.md) | 1.14 CGRA | ✓ TX8/TX8H（订单 30,000+） | — | ✓ REX81 Supernode（500PFLOPS+） | 推理+超节点均由 △ 升级为 ✓；已建成 10+ 可重构算力中心 |
| 6 | [登临科技（DenglinAI）](../companies/登临科技（DenglinAI）.md) ⚠ | 1.14 GCU | ✓ Goldwasser 推理线 | △ 训练路线待核 | — | 官网域名已流失，高风险跟踪对象 |

### 三、边缘+端侧 SoC 平台

以 SoC 或端侧 AI 芯片为核心产品，面向 AIoT、机器人、智能驾驶等场景。按技术路线分组排序。

| 排序 | 公司 | 技术路线 | 端侧 | 边缘 | SoC | 主要场景 |
|---|---|---|---|---|---|---|
| — | **1.3 NPU** | | | | | |
| 1 | [地平线（HorizonRobotics）](../companies/地平线（HorizonRobotics）.md) | 1.3 NPU | ✓ 征程5/6E/6P | ✓ | ✓ 征程5/6E/6P | 智能驾驶，征程6 系列由 △ 升级为 ✓，累计出货超 1000 万颗 |
| 2 | [黑芝麻智能（BlackSesameTechnologies）](../companies/黑芝麻智能（BlackSesameTechnologies）.md) | 1.3 NPU | ✓ A1000/C1200；A2000待核 | △ | ✓ A1000/C1200 | 车规 SoC，2026年7月具身智能战略合作 |
| 3 | [地瓜机器人（D-Robotics）](../companies/地瓜机器人（D-Robotics）.md) | 1.3 NPU | ✓ 旭日3/5 | ✓ | ✓ 旭日3/5/S600 | 机器人，域名迁移至 d-robotics.cc |
| 4 | [瑞芯微（Rockchip）](../companies/瑞芯微（Rockchip）.md) | 1.3 NPU | ✓ RK3588/RK3576 | ✓ | ✓ RK3588/RK3576 | AIoT 通用；新增 RK3572（2026年5月）和 RK182X AI 协处理器 |
| 5 | [爱芯元智（Axera）](../companies/爱芯元智（Axera）.md) | 1.3 NPU | ✓ M系列/AX650N | ✓ | ✓ AX650N | 视觉 AI，2026年2月港股上市；新增「元曦」推理产品线（△） |
| 6 | [超星未来（Novauto）](../companies/超星未来（Novauto）.md) | 1.3 NPU | ✓ 杰作系列 | ✓ | ✓ 车规 SoC | 车载 |
| 7 | [算能科技（Sophgo）](../companies/算能科技（Sophgo）.md) | 1.3 NPU | △ BM1684X 模组 | ✓ | ✓ CV 系列 SoC | 边缘盒+CV SoC，推理 ✓，BM1690 未见于产品列表 |
| — | **1.11 FPGA** | | | | | |
| 8 | [Altera](../companies/Altera.md) | 1.11 FPGA | — | ✓ | ✓ Agilex SoC FPGA | FPGA SoC，无专用 AI 端侧芯片；2024年从 Intel 独立运营 |

### 四、边缘推理加速

以边缘推理卡/模组/加速盒为核心交付形态，云端和 SoC 非主业。按技术路线分组排序。

| 排序 | 公司 | 技术路线 | 边缘 | 端侧 | 备注 |
|---|---|---|---|---|---|
| — | **1.3 NPU** | | | | |
| 1 | [Hailo](../companies/Hailo.md) | 1.3 NPU | ✓ Hailo-10H（40 TOPS）/8/8 Century（208 TOPS PCIe 卡） | ✓ Hailo-8L（13 TOPS）/15H/15L（最高 20 TOPS） | 边缘+端侧均 ✓，无云端产品；Hailo-10H 为第二代神经核心架构 |
| — | **1.6 存算一体** | | | | |
| 2 | [后摩智能（HoumoAI）](../companies/后摩智能（HoumoAI）.md) | 1.6 存算一体 | ✓ LIQING M.2/边缘盒 | △ | 存算一体路线中唯一边缘 ✓，官网无法访问 |
| — | **1.12 类脑** | | | | |
| 3 | [灵汐科技（Lynxi）](../companies/灵汐科技（Lynxi）.md) | 1.12 类脑 | ✓ KA200 模组/边缘 | △ | 类脑路线中唯一边缘 ✓ |
| — | **1.14 其他架构** | | | | |
| 4 | [熠知电子（ThinkForce）](../companies/熠知电子（ThinkForce）.md) | 1.14 ManyCore | ✓ TF7000/TF16000 | △ | 同时有 SoC ✓ |

### 五、新兴/前沿架构（多数待验证）

采用非主流架构，普遍处于 △ 或更早阶段，尚无 ✓ 级云端产品。按技术路线分组排序。

| 排序 | 公司 | 技术路线 | 最成熟产品状态 | 备注 |
|---|---|---|---|---|
| — | **1.1 GPGPU** | | | |
| 5 | [象帝先（Xiangdixian）](../companies/象帝先（Xiangdixian）.md) | 1.1 GPGPU | △ AI GPU 产品线 | 全产品线均为 △ |
| 6 | [砺算科技（Lisuan）](../companies/砺算科技（Lisuan）.md) | 1.1 GPGPU | △ G100/G200 | 全产品线均为 △，量产待核 |
| — | **1.5 光子互联** | | | |
| 4 | [Lightmatter](../companies/Lightmatter.md) | 1.5 光子互联 | ✓ Passage L200/L20/M1000（超节点互联） | 战略转向光子互联，Envise 光子计算芯片已从产品线移除，不再属于 AI 计算芯片 |
| — | **1.6 存算一体** | | | |
| 2 | [知存科技（Witmem）](../companies/知存科技（Witmem）.md) | 1.6 Flash CIM | ✓ WTM2101（端侧，KK 级量产出货） | 端侧由 △ 升级为 ✓，官网声称全球率先量产商用 |
| 3 | [九天睿芯（REEXEN）](../companies/九天睿芯（REEXEN）.md) | 1.6 SRAM-CIM | △ ADA300D（推理） | 全产品线均为 △，官网无法访问 |
| — | **1.12 类脑** | | | |
| 1 | [时识科技（SynSense）](../companies/时识科技（SynSense）.md) | 1.12 类脑 SNN | ✓ Speck/Aeveon/Xylo（端侧） | 类脑芯片中唯一端侧 ✓，有成熟开发套件、SDK 和文档 |

### 总体格局

```
                    训练 ✓          训练 △/—        无训练产品
─────────────────────────────────────────────────────
推理 ✓    │  NVIDIA Google AWS     Groq            —
          │  AMD Intel Cerebras    Tenstorrent
          │  华为 寒武纪 昆仑芯    摩尔线程
          │  海光 燧原 天数智芯    瀚博 登临
          │  沐曦 壁仞 Graphcore   清微
          │
推理 △/—  │  —                    象帝先 砺算      爱芯(元曦△)
          │
无推理    │  —                     —               瑞芯微 地平线
          │                                        地瓜 黑芝麻 Hailo
          │                                        后摩 灵汐 熠知
          │                                        时识 知存 九天
          │                                        Altera 超星未来
          │                                        算能
```

### 关键观察

1. **第一梯队（训练+推理+超节点全 ✓）**：NVIDIA、华为昇腾、AWS、Cerebras、燧原科技、Google（超节点由 △ 升级为 ✓）。
2. **第二梯队（训练+推理 ✓，超节点待核）**：寒武纪、昆仑芯、海光、AMD、Intel、Graphcore、天数智芯、沐曦、壁仞（推理由 △ 升级为 ✓，产品更名壁砺系列）。
3. **推理专用（差异化路线）**：Groq（LPU，超节点 ✓，新增 LPX 产品线）、Tenstorrent（RISC-V Chiplet，超节点 ✓，新增工作站和 Ascalon 处理器）、清微智能（CGRA，推理+超节点 ✓）。
4. **端侧/边缘 SoC 集群**：8 家公司集中在 AIoT+机器人+智驾。地平线征程 6 系列由 △ 升级为 ✓（累计出货超 1000 万颗）。瑞芯微新增 RK3572 和 RK182X 产品线。爱芯元智 2026 年港股上市，新增「元曦」推理产品线（待核）。
5. **前沿架构**：存算一体、类脑、光子/互联共 6 家。知存科技 WTM2101 端侧由 △ 升级为 ✓（KK 级量产出货）。Lightmatter 已转向光子互联（非 AI 计算芯片）。
6. **风险关注**：登临科技官网域名已流失（高风险跟踪）；Graphcore Bow IPU 归入 Legacy Products，硬件方向不明；Intel Falcon Shores 已取消，Gaudi 3 营收未达标；昆仑芯官网 403 无法更新。

## 口径说明

- 技术路线优先使用产业链分类规则的正式主分类；括号保留公司自称的类型，例如 GCU、XPU、BPU、Tensix 或 FPGA。公司自称的 XPU/GCU 不自动等同于 GPGPU、TPU 或 NPU。
- 产品线：云端训练卡和云端推理卡指数据中心加速卡/模组/系统；端侧指设备内低功耗计算；边缘侧指边缘服务器、工业盒或近端机房；超节点指多卡/多节点及专用互联的系统级交付；SoC 指 CPU/NPU/GPU/DSP/ISP 等集成在同一芯片或封装内。
- 状态：✓ = 已有商业化或可验证交付线索；△ = 已发布、样片、客户导入或公司自述，但量产/持续交付仍待核验；→ = 研发或路线图；? = 主体、产品归属或来源存在冲突；— = 当前公司页未发现该产品线证据。
- 最新产品只写公司页或其 Raw 中出现的最新具名产品。若新型号未完成量产验证，采用"已验证产品；待核产品"的双层写法。

## 产品覆盖矩阵

按技术路线分组排序。

| 公司（研究主体） | 主要技术路线 | 云端训练卡 | 云端推理卡 | 端侧 | 边缘侧 | 超节点 | SoC |
|---|---|---|---|---|---|---|---|
| — | **1.1 GPGPU（AI GPU）** | | | | | | |
| [NVIDIA](../companies/NVIDIA.md) | 1.1 GPGPU（AI GPU） | ✓ H100/H200/B200/GB200 | ✓ H100/H200/B200/GB200 | — | △ Jetson Orin/Thor | ✓ GB200 NVL72（已量产交付）；△ GB300 NVL72（当前机架产品）；→ Vera Rubin NVL72（架构路线图） | — |
| [AMD](../companies/AMD.md) | 1.1 GPGPU（AI GPU）；1.11 FPGA | ✓ Instinct MI300X/MI325X | ✓ Instinct MI300X/MI325X | — | △ Versal/嵌入式线待核 | △ MI300 机架方案待核；MI355X(CDNA4)原计划 2025H2 量产待确认 | — |
| [Intel](../companies/Intel.md) | 1.1 GPGPU（Gaudi）；1.4 图形 GPU | ✓ Gaudi 3（2024 年营收目标 $500M 未达成，实际出货量低于预期；Falcon Shores 于 2025 年初取消，转向 Jaguar Shores） | ✓ Gaudi 3（生态成熟度和客户采纳度低于 NVIDIA/AMD） | △ Movidius/Arc 端侧线待核 | △ Arc 边缘线待核 | △ Gaudi 3 rack-scale 待核；Falcon Shores 已取消；Jaguar Shores 路线图待确认 | — |
| [昆仑芯（Kunlunxin）](../companies/昆仑芯（Kunlunxin）.md) | 1.1 GPGPU（AI GPU；XPU） | ✓ R480-X8；第三代待核（官网 403 无法访问，缺乏 2025 年后产品更新） | ✓ R200 | — | ✓ R200 PCIe | △ 32/64 卡；256/512 卡路线 | — |
| [天数智芯（IluvatarCoreX）](../companies/天数智芯（IluvatarCoreX）.md) | 1.1 GPGPU（AI GPU） | ✓ 天垓系列；代际待核 | ✓ 智铠系列；代际待核 | — | △ 智铠边缘部署待核 | △ 训推集群待核 | — |
| [沐曦（MetaX）](../companies/沐曦（MetaX）.md) | 1.1 GPGPU（AI GPU） | ✓ 曦云 C500；C600待核 | ✓ 曦思 N 系列 | — | △ 曦思 N 系列边端 | — | — |
| [海光信息（Hygon）](../companies/海光信息（Hygon）.md) | 1.1 GPGPU-like（DCU） | ✓ 深算 DCU；代际待核（深算三号量产状态缺公开验证） | ✓ DCU 系列；代际待核 | — | △ DCU 边缘部署待核 | △ DCU 集群待核 | — |
| [壁仞科技（BirenTechnology）](../companies/壁仞科技（BirenTechnology）.md) | 1.1 GPGPU（AI GPU） | ✓ 壁砺166M/166L（训推一体 OAM，曾用名 BR100/BR104，制裁后重新设计） | ✓ 壁砺166C（高性能推理加速卡）；166M/166L 亦支持推理 | — | △ 边缘路线待核 | △ 多卡系统待核 | — |
| [摩尔线程（MooreThreads）](../companies/摩尔线程（MooreThreads）.md) | 1.1 GPGPU；1.4 图形 GPU | △ MTT S5000（训推一体）/S4000/S3000；KUAE 预训练平台；训练待核 | ✓ MTT S5000/S4000/S3000 | △ MTT S80/S70 | ✓ MTT S4000/S3000 边缘服务器 | △ SGX5000 训推一体机/多卡服务器待核 | — |
| [象帝先（Xiangdixian）](../companies/象帝先（Xiangdixian）.md) | 1.1 GPGPU（AI GPU） | △ AI GPU 产品线待核 | △ AI GPU 推理线待核 | — | △ 边缘产品线待核 | — | — |
| [砺算科技（Lisuan）](../companies/砺算科技（Lisuan）.md) | 1.1 GPGPU（AI GPU） | △ G100/G200；量产待核 | △ 推理路线待核 | — | △ 边缘 GPU 待核 | — | — |
| [瀚博半导体（Vastai）](../companies/瀚博半导体（Vastai）.md) | 1.1 GPGPU（AI GPU） | △ VA1/VA10；交付待核 | ✓ VA1/VA10 推理线索 | — | △ 边缘推理待核 | △ 集群方案待核 | — |
| — | **1.2 TPU（ASIC）** | | | | | | |
| [Google](../companies/Google.md) | 1.2 TPU（ASIC） | ✓ TPU v5p/Trillium（Trillium 于 2024 年底向云客户开放，至 2026 年已全面 GA） | ✓ TPU v5e/Trillium | — | — | ✓ TPU Pod/Supercomputer（Trillium 支持更大规模 Pod，Gemini 等内部工作负载已验证） | — |
| [AWS](../companies/AWS.md) | 1.2 TPU-like ASIC（Trainium/Inferentia） | ✓ Trainium2 | ✓ Inferentia2；△ Inferentia3（2024 re:Invent 宣布，GA 待确认） | — | — | ✓ Trn2 UltraServer（64 颗 Trainium2 芯片互联，面向万亿参数模型训练，已向 Anthropic 等客户提供） | — |
| — | **1.3 NPU（ASIC）** | | | | | | |
| [华为昇腾（Ascend）](../companies/华为昇腾（Ascend）.md) | 1.3 NPU（Ascend AI Processor） | ✓ 910B（SMIC 7nm N+1）/910C（双 910B 封装，SMIC 7nm N+2，2025 年出货 80 万+片）；△ 910D（2025年5月送样，待量产验证） | ✓ 310（12nm）/310P（DaVinci Max）；910C 已用于 DeepSeek R1 推理（实测约 H100 60% 性能） | △ 昇腾端侧产品线待核（Ascend 610/620 等） | ✓ Atlas 200 AI 加速模块/300 推理卡/500 边缘盒子 | ✓ Atlas 900/CloudMatrix 384（384 张 910C，16 机柜，6912 个 800G LPO 光模块，全光互联；2025年4月起交付；售价约 6000 万元/套） | — |
| [寒武纪（Cambricon）](../companies/寒武纪（Cambricon）.md) | 1.3 NPU（MLU） | ✓ 思元 370（MLUarch03, Chiplet）；思元 590 待核（未出现在官网产品页，外部传闻已流片但量产状态待核） | ✓ MLU220/370 | △ 1A/1H/1M IP 线待核 | ✓ MLU220/370 | △ MLU-Link/集群待核 | △ 终端 IP/SoC 待核 |
| [算能科技（Sophgo）](../companies/算能科技（Sophgo）.md) | 1.3 NPU（TPU-like） | △ BM1684X/BM1688；训练待核（BM1690 未见于产品列表） | ✓ BM1684/BM1684X/BM1688 | △ BM1684X 模组 | ✓ BM1684X 边缘盒 | △ SE9/SE8/SE7 多卡服务器待核 | ✓ CV 系列 SoC（CV186AH, CV184xH, CV180xB, CV181xH 等） |
| [瑞芯微（Rockchip）](../companies/瑞芯微（Rockchip）.md) | 1.3 NPU（AIoT NPU） | — | — | ✓ RK3588/RK3576；新增 RK3572（2026年5月，新一代八核 AIoT 平台） | ✓ RK3588/RK3576；新增 RK182X 系列 AI 协处理器（2025年11月，面向边缘大模型部署） | — | ✓ RK3588/RK3576 |
| [地瓜机器人（D-Robotics）](../companies/地瓜机器人（D-Robotics）.md) | 1.3 NPU（BPU/Nash） | — | — | ✓ 旭日 3/5；RDK X3/X5 | ✓ S100/S600/RDK Ultra | — | ✓ 旭日 3/5/S600 |
| [地平线（HorizonRobotics）](../companies/地平线（HorizonRobotics）.md) | 1.3 NPU（BPU） | — | — | ✓ 征程 5/6E/6P（征程6系列已大规模量产，征程6E 于 2026年5月搭载 MG 4X 上市，征程6P 用于 Horizon SuperDrive） | ✓ Journey/征程开发板 | — | ✓ 征程 5/6E/6P（累计出货超 1000 万颗，量产定点车型 400+，量产上市车型 300+，合作车企 40+） |
| [黑芝麻智能（BlackSesameTechnologies）](../companies/黑芝麻智能（BlackSesameTechnologies）.md) | 1.3 NPU（车规 SoC/AMCAX） | — | — | ✓ A1000/A1000L/C1200；A2000待核（未找到量产出货明确时间证据） | △ A2000 方案待核 | — | ✓ A1000/A1000L/C1200 |
| [爱芯元智（Axera）](../companies/爱芯元智（Axera）.md) | 1.3 NPU（视觉 AI SoC） | — | △ 元曦系列（WAIC 2026 发布，量产待核） | ✓ M系列/AX650N | ✓ AX650N 边缘盒/模组 | — | ✓ AX650N |
| [超星未来（Novauto）](../companies/超星未来（Novauto）.md) | 1.3 NPU（车载 AI SoC） | — | — | ✓ 杰作系列；SKU待核 | ✓ 车载边缘方案 | — | ✓ 车规 SoC |
| [Hailo](../companies/Hailo.md) | 1.3 NPU（边缘 AI accelerator） | — | — | ✓ Hailo-8L（13 TOPS）/15H/15L（最高 20 TOPS，AI 视觉处理器） | ✓ Hailo-10H（40 TOPS，第二代神经核心，面向 GenAI）；Hailo-8（26 TOPS）；Hailo-8 Century（208 TOPS PCIe 卡） | — | — |
| — | **1.5 光子互联** | | | | | | |
| [Lightmatter](../companies/Lightmatter.md) | 1.5 光子互联（原分类"光子/光电计算"已不准确） | —（Envise 已从产品线完全移除，仅出现在商标声明中） | —（Passage 为互联产品，非 AI 计算） | — | — | ✓ Passage L200（32-64 Tbps CPO）/L20（12.8 Tbps）/M1000（114 Tbps 3D 光子中介层参考平台）；Guide 1/Guide DR 光源；已加入 NVIDIA NVLink Fusion 生态 | — |
| — | **1.6 存算一体** | | | | | | |
| [后摩智能（HoumoAI）](../companies/后摩智能（HoumoAI）.md) | 1.6 存算一体（SRAM CIM） | — | △ Limou 5050 | △ HaloDrive/MOMAGIC 30/50 | ✓ LIQING M.2/边缘盒 | — | — |
| [知存科技（Witmem）](../companies/知存科技（Witmem）.md) | 1.6 存算一体（Flash CIM） | — | — | ✓ WTM2101（KK 级量产出货，官网声称全球率先量产商用） | △ WTM-8/评估板（产品页 404） | — | — |
| [九天睿芯（REEXEN）](../companies/九天睿芯（REEXEN）.md) | 1.6 存算一体（SRAM-CIM） | — | △ ADA300D/ADA400-DN | △ ADA300N | △ AI 推理服务器 | — | — |
| — | **1.11 FPGA** | | | | | | |
| [Altera](../companies/Altera.md) | 1.11 FPGA（FPGA/SoC FPGA） | — | △ Agilex AI 加速卡 | — | ✓ Agilex 5/7 SoC FPGA | △ FPGA 系统待核 | ✓ Agilex SoC FPGA |
| — | **1.12 类脑芯片** | | | | | | |
| [时识科技（SynSense）](../companies/时识科技（SynSense）.md) | 1.12 类脑芯片（SNN/DVS） | — | — | ✓ Speck/Aeveon/Xylo（有成熟开发套件、SDK、文档及 CES 创新奖） | ✓ DVS/边缘感知套件 | — | — |
| [灵汐科技（Lynxi）](../companies/灵汐科技（Lynxi）.md) | 1.12 类脑芯片（DNN/SNN） | — | △ KA200/KA200-S；交付待核 | △ 类脑感知待核 | ✓ KA200 模组/边缘产品 | — | — |
| — | **1.13 LPU** | | | | | | |
| [Groq](../companies/Groq.md) | 1.13 LPU | — | ✓ LPU 卡/系统（256 LPU/rack，315 PFLOPS FP8；GroqMetal/GroqCore/GroqAssured 三层架构） | — | △ 边缘产品待核（GroqCard 品牌不再使用） | ✓ LPU Rack（256 LPU/rack，当前量产规格）；新增 LPX 产品线（256 颗下一代 LPU + NVIDIA Vera Rubin，面向低延迟大上下文推理） | — |
| — | **1.14 其他 AI 芯片架构** | | | | | | |
| [Cerebras](../companies/Cerebras.md) | 1.14 其他（Wafer-Scale Engine） | ✓ CS-3/WSE-3 | ✓ CS-3/WSE-3 | — | — | ✓ CS-3 集群系统（与 Flex 合作扩产 7 倍；欧洲扩展至 200MW） | — |
| [Graphcore](../companies/Graphcore.md) | 1.14 其他（IPU） | ✓ Bow IPU（Legacy Products，无新代际产品；联合创始人兼执行主席 Nigel Toon 于 2026 年卸任，公司转向印度 AI 工程中心和台北办公室扩张，硬件产品方向不明） | ✓ Bow IPU（Legacy Products） | — | — | △ IPU-POD（Legacy Products） | — |
| [Tenstorrent](../companies/Tenstorrent.md) | 1.14 其他（Tensix/RISC-V/Chiplet） | △ Blackhole（$999 起售，已开售但训练能力需独立验证）；Wormhole | ✓ Wormhole n150/n300；Blackhole p100/p150 | — | △ 定制加速器待核 | ✓ Galaxy 系统（$70,000 起售，当前产品）；新增 TT-QuietBox 工作站（$9,999）、TT-Ascalon S（2026年6月发布）、TT-Forge 编译器（MLIR-based，公测中） | — |
| [燧原科技（Enflame）](../companies/燧原科技（Enflame）.md) | 1.14 其他（GCU） | ✓ 云燧加速卡/OGX | ✓ S60 | — | △ 云燧边缘系统待核 | ✓ 云燧超节点 | — |
| [登临科技（DenglinAI）](../companies/登临科技（DenglinAI）.md) ⚠ | 1.14 其他（GCU/通用加速器） | △ Goldwasser 训练路线待核 | ✓ Goldwasser 推理线 | — | △ 边缘推理待核 | — | — |
| [清微智能（TsingMicro）](../companies/清微智能（TsingMicro）.md) | 1.14 其他（可重构计算/CGRA） | — | ✓ TX8/TX8H（算力卡订单 30,000+，已建成 10+ 可重构算力中心，适配 200+ 模型/应用） | △ 端侧路线待核 | ✓ 边缘推理板卡/模组 | ✓ REX81 Supernode（500PFLOPS+）；新增 REX1032 高性能智算服务器 | — |
| [熠知电子（ThinkForce）](../companies/熠知电子（ThinkForce）.md) | 1.14 其他（ManyCore/NPU 异构 SoC） | — | △ NNC100 | △ NNM100 | ✓ TF7000/TF16000 | — | ✓ TF7000 |

## 争议与待核验事项

1. 产品状态不等于收入或规模交付。✓ 只表示公司页已有产品或交付线索；仍需以料号、数据表、订单/验收、出货、回款、软件版本和现场测试确认采购可行性。
2. "最新"按公开可识别型号，不按发布会排序。新型号没有量产、客户或供货证据时保留 △，路线图保留 →。
3. 主体边界需要持续维护。关联公司的产品和收入不能自动合并到母公司行；典型例子包括黑芝麻智能—易创智芯、地平线—地瓜机器人等。
4. 训练与推理不能由芯片名称推断。NPU、GCU、XPU、CIM 和类脑芯片若没有分布式训练、框架后端、通信和收敛证据，训练列只能写 △ 或 —。
5. **登临科技官网域名已流失**（denglin.com 跳转至域名交易平台，denglintech.com SSL 证书不匹配，denglin.com.cn 连接失败）。Goldwasser GCU 系列产品最新进展无法通过公开渠道获取，标记为高风险跟踪对象。建议尽调其经营状况。
6. **Lightmatter 战略转向光子互联**。Envise 光子计算芯片已从产品线移除，仅出现在商标声明中。公司当前主力产品为 Passage 系列光互联平台和 Guide 系列光源，已加入 NVIDIA NVLink Fusion 生态。不再归类为 AI 计算芯片公司。
7. **华为 910D 已送样但量产待验证**。910D 于 2025 年 5 月向客户送样，量产状态和性能需独立验证。
8. **昆仑芯官网 403 禁止访问**。未能通过公开渠道获取 2025 年以后的第三代芯片量产进展，当前状态依赖历史记录。
9. **Graphcore Bow IPU 归入 Legacy Products**。官网将 Bow IPU 及 IPU-POD 归入"Legacy Products"分类，联合创始人兼执行主席 Nigel Toon 于 2026 年卸任。公司转向印度 AI 工程中心和台北办公室扩张，硬件产品方向不明。
10. **壁仞科技产品更名**。BR100/BR104 更名为壁砺（Bili）系列（166M/166L/166C/106M/106B），可能为美国制裁后降规格的重新设计版本，实际性能与原始 BR100 宣传可能有差距。公司 2026 年 1 月港股上市。
11. **Intel Falcon Shores 已取消**。据行业报告，Intel 于 2025 年初取消 Falcon Shores，转向下一代 Jaguar Shores。Gaudi 3 2024 年营收目标 $500M 未达成，实际出货量低于预期。
12. **清微智能推理与超节点升级**。TX8/TX8H 推理卡累计订单 30,000+，已建成 10+ 可重构算力中心。REX81 Supernode 为新增超节点产品（500PFLOPS+）。这些数据来自公司官网自述，建议以第三方客户案例交叉验证。
13. **爱芯元智「元曦」系列**为 WAIC 2026 发布的新推理产品线，量产状态和客户交付待确认。
14. **Groq LPX 产品线**：256 颗下一代 LPU 加速器搭配 NVIDIA Vera Rubin，面向低延迟大上下文推理，量产状态待确认。
15. **Tenstorrent Blackhole 已开售**（$999 起），但大规模训练能力需独立验证。Galaxy 超节点 $70,000 起售，为当前产品。TT-Ascalon S 于 2026 年 6 月发布，量产状态待确认。
16. **Hailo-10H 确认为量产产品**（40 TOPS INT4，第二代神经核心架构），面向边缘 GenAI 推理，产品矩阵较此前记录更丰富。
17. **瑞芯微新增 RK3572 和 RK182X 产品线**。RK3572 为 2026 年 5 月新发布的新一代八核 AIoT 平台（性能翻倍功耗减半），RK182X 为 2025 年 11 月发布的 AI 协处理器（面向边缘大模型部署）。量产状态分别待确认。
18. **知存科技 WTM2101 端侧由 △ 升级为 ✓**。官网声称"全球率先量产商用"和"KK 级量产出货"，表明已实现商业规模量产。WTM-8 产品页面 404，维持 △。
19. **摩尔线程 2025 年 12 月上市**。募资超 10 亿美元，首日涨幅 468%。DeepSeek 创始人梁文锋为顶级机构投资者。新增 S5000（训推一体全功能 GPU）和 KUAE（大模型预训练平台）。
20. **算能科技 BM1690 未见产品列表**。BM1684X、BM1688 仍在列，CV 系列 SoC 正常展示。未发现新量产公告或产品发布。
21. **Cerebras 推理业务显著增长**。新增 AMD disaggregated inference 合作、OpenAI 低延迟推理部署、AWS Trainium+CS-3 disaggregated inference。欧洲扩展至 200MW（2027 年底）。

## 更新规则

每次产品更新应同步检查对应公司页的主分类和产品段落、Raw 引用、wiki/index.md、wiki/log.md，以及涉及该公司产品的其他比较页。若产品从 △ 变为 ✓，应记录量产、客户或供货的新增证据；若来源发生冲突，在本节保留分歧并创建或更新 wiki/questions/ 开放问题页。