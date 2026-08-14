# Axelera AI 横纵分析报告：把 SRAM 里的乘法带到机器人身边

> Source: 本地文件 `横纵研究报告/AxeleraAI_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

## 原文关键内容

> 研究对象：Axelera AI B.V.（简称 Axelera AI）  
> 研究截止日：2026-08-11｜公司类型：边缘/嵌入式 AI 推理加速器公司  
> 证据口径：优先采用公司一手公告、技术文档与欧盟项目材料；厂商性能、管线和客户数字均明确标注其来源属性。

Axelera AI 是一家把 SRAM 型数字存内计算（Digital In-Memory Compute，D-IMC）、RISC-V 向量/数据流控制、PCIe/M.2 板卡及 Voyager SDK 组合为端侧推理交付物的荷兰公司；当前可验证的核心商业产品是 Metis，而 Europa 与 Titania 分别代表下一代 AIPU 和面向 HPC 的 chiplet 路线。

公司称 2023 年 9 月向首批客户出货 Metis，2024 年提供含预发布 Metis PCIe 卡和 Voyager SDK 的 x86/Arm 评估系统；2025 年伙伴将 Metis 模组整合至工业系统。2024 年 Series B 为 6,800 万美元、公司称累计融资 1.2 亿美元；2026 年最新一轮「超过 2.5 亿美元」由 Innovation Industries 领投，公司称自 2021 年注册以来累计股权、补助和创投债务超过 4.5 亿美元。三种资金口径不能相加，也不能将公司称「500 个客户」直接转换为重复收入、量产订单或毛利。

2025 年 10 月公司发布采用第二代 D-IMC 的 Europa，称 629 INT8 TOPS、128MB 片上 L2 SRAM、200GB/s LPDDR5 接口，并预计 2026 年上半年开始 AIPU 与 PCIe 卡出货；截至研究截止日，公开证据可证明发布、伙伴验证意向及计划，不能证明大规模商业出货、良率、价格或持续客户收入。

Metis 的产品抽象是：AIPU 放在 M.2、PCIe 卡或计算板上，配套 x86/Arm 主机，Voyager 负责模型转化、量化、编译、管线配置及运行。公司当前网页称单颗 Metis 最高 214 INT8 TOPS、典型功耗约 10W、15 TOPS/W；开发文档还列出 M.2 形态的 214 TOPS/<10W，及 PCIe 单/四 AIPU 配置最高 856 TOPS。这些是厂商规格/测试口径，不能与不同精度、稀疏性、主机、散热条件下的 GPU TOPS 直接相除。

Voyager SDK 提供从模型到部署的完整路径：用 YAML 描述一个或多个网络及预后处理，SDK 自动编译、优化、部署，按需要把工作放到 host CPU/embedded GPU/media accelerator 与 AIPU；网页还描述 TVM compiler、GStreamer、Metis runtime、Pipeline Callback API、Model Zoo、文档和社区。公开材料未充分证明外部开发者可进行 C/C++ device programming、自由编写 custom kernel、长期稳定的自定义算子后端、多卡通信库、通用调试/profiling 与大规模训练支持；更像「针对 Metis 推理的端到端 SDK」。

建议动作：先做采购/合作型 POC，暂不做并购，也不以「国产/欧洲替代」叙事作直接股权下注。用机器人真实相机、深度/力觉前后处理、网络、温度和电源预算，在 Metis M.2/PCIe 上同 NVIDIA Jetson、Hailo、Ambarella 或现有 SoC 进行端到端测量；若目标模型在同等精度、P95 延迟、热设计功耗、故障恢复和三年总拥有成本上持续胜出，再讨论量产导入或战略合作。Europa/Titania 只进入未来路线图观察池。

主分类：`1.10 存算一体/近存计算芯片（SRAM 数字存内计算 D-IMC）`，高置信。Axelera 的核心可验证技术和产品叙事是用 SRAM 阵列进行数字存内矩阵—向量计算，客户购买的是推理加速能力而非单纯内存容量。Metis 已形成 AIPU、M.2/PCIe 板卡、系统与 SDK 的交付形态，符合本库 1.10 对 SRAM-CIM/近存推理芯片、板卡或系统的定义。

不设正式次分类 `1.4 其他AI芯片架构`。RISC-V 数据流和 AIPU 的确是其重要实现，但它们服务于已被明确、可验证的 SRAM D-IMC 主价值创造；若将同一条产品再以「其他 AIPU」作为次类，会掩盖其真正的差异化，且没有独立 DPU/FPGA/LPU/IPU 产品线证据。

不设正式次分类 `2.1 加速计算平台（CUDA-like）`。Voyager 已有 SDK、runtime、TVM/GStreamer 管线、模型库、文档和开发者入口，是产品化软件栈；但公开资料尚不足以证明外部设备编程/自定义算子或可扩展 compiler backend、加速库、多卡通信与调试/迁移工具达到要求。

## 原始报告位置

完整原文保留于本次导入的本地来源文件：[AxeleraAI 横纵分析报告](../../横纵研究报告/AxeleraAI_横纵分析报告.md)。
