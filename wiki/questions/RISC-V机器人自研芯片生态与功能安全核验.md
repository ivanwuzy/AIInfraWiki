# RISC-V 机器人自研芯片生态与功能安全核验

> Sources: RISC-V International, Unknown; Linux Foundation RISE, Unknown; Linux Kernel Documentation, Unknown; QEMU Project, Unknown; arXiv research, 2023-2025; 横纵研究报告, 2026-08-11
> Raw: [RISC-V International About](../../raw/sources/2026-08-11-risc-v-international-about.md); [RISE](../../raw/sources/2026-08-11-rise-risc-v-software-ecosystem.md); [Linux RISC-V architecture](../../raw/sources/2026-08-11-linux-kernel-risc-v-architecture.md); [Profiles and platform fragmentation](../../raw/sources/2026-08-11-risc-v-profiles-and-platform-fragmentation.md); [RISC-V robotics and functional-safety research](../../raw/sources/2026-08-11-arxiv-risc-v-robotics-and-functional-safety.md); [RISC-V 横纵分析报告](../../raw/sources/2026-08-11-risc-v-横纵分析报告.md)
> Updated: 2026-08-11

## Question

在本公司计划采用、投资或并购 RISC-V 机器人控制／边缘 SoC 之前，目标方案是否已经将开放 ISA 的选择权转化为可量产的软件、功能安全、供货和权利闭环？

## Why this is open

RISC-V International 只维护 ISA 与相关规范，不提供商业实现；Linux 与 RISE 证明上游软件和商业软件准备工作在持续推进，但不能证明任一具体芯片的 BSP、驱动、NPU 工具、OTA 与长期支持。【R1】【R2】【R3】RVA profile 的存在以及 QEMU 对板级镜像不互通的说明，进一步表明 ISA 兼容不自动成为平台兼容。【R4】SentryCore、Shaheen 等论文展示了 lockstep、ECC、RTOS、虚拟化和低功耗异构的可行原型，却不是人形机器人量产或认证证据。【R5】

## P0 diligence questions

| 问题 | 支持证据 | 反对／缺口 | 验证动作与触发条件 |
|---|---|---|---|
| ISA/profile/扩展是否可被软件稳定识别？ | RISC-V 规范可批准并冻结扩展，RVA profile 为二进制软件市场对齐共同特性，Linux 有硬件探测、ABI 与向量文档。【R1】【R3】【R4】 | 目标 SoC 的扩展、ABI、编译器版本与预编译软件兼容性未知；不同板级镜像通常不互通。【R4】 | 获取 profile、扩展清单、ABI、工具链版本和容器兼容矩阵；无法锁定版本则不进入量产。 |
| BSP 与驱动是否覆盖机器人外设？ | Linux 与 RISE 的上游生态正在维护。【R2】【R3】 | 摄像头、EtherCAT/CAN、编码器、ISP/NPU、功耗、诊断与 OTA 的具体支持未知。 | 在真实传感器／执行器上复现启动、负载、掉电恢复、OTA 回滚和故障定位；缺任一关键驱动即退出。 |
| 实时与功能安全是否成立？ | 研究原型使用 lockstep、ECC、CLIC、DMA 与 RTOS。【R5】 | 原型不等于诊断覆盖、故障注入、系统认证、供应商责任或长期质量数据。 | 审计安全概念、FMEDA/故障树、故障注入、WCET/抖动、芯片 errata、认证和质量体系；未通过不得控制人身安全关键闭环。 |
| RISC-V 是否带来可量化经济性？ | 开放 ISA 提供可定制与不依赖单一 ISA 授权的选择权。【R1】 | CPU IP 节省可能被软件、验证、NRE 与现场维护吞没。 | 与成熟方案在目标出货量下比较 BOM、NRE、许可、开发工时、故障成本和停供风险；净收益为负则采购成熟方案。 |
| 并购资产是否可转移？ | 标准可公开采用，价值在实现、软件、验证与客户交付。 | RTL、固件、工具、第三方 IP、客户合同与人才可能不可转移。 | 核验权属链、许可可转让性、代码构建、测试资产、核心人员、客户同意与供应合同；不完整时只做合作或资产切分。 |

## Provisional decision rule

在存在明确、可隔离的控制或加速器控制面工作负载时，可开展双路径 PoC；在可审计的实时、安全、BSP、OTA、权属和供货证据齐备前，不将 RISC-V 方案作为人形机器人安全关键量产主控，也不以“开放 ISA”作为高溢价投资或整公司并购理由。

横纵报告进一步要求将 PoC 与成熟方案按端到端延迟抖动、功耗、故障恢复、开发工时、BOM、工具稳定性和可维护性对比；仅有核级 benchmark、开发板启动或论文原型时，不进入量产评审。

## Sources

- 【R1】RISC-V International About。
- 【R2】RISE: RISC-V Software Ecosystem。
- 【R3】Linux Kernel Documentation: RISC-V architecture。
- 【R4】RISC-V Profiles 理由／RVA23 与 QEMU RISC-V System emulator 文档。
- 【R5】arXiv API 返回的 SentryCore、Shaheen 与 NanoSLAM 摘要。
