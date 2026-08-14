# Tenstorrent关键尽调问题

> Sources: Tenstorrent 横纵分析报告（本地研究报告）, 2026-08-11
> Raw: [Tenstorrent 横纵分析报告](../../raw/sources/2026-08-11-tenstorrent-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Tenstorrent 的可验证资产是 Tensix 加速器、开发产品、RISC-V/chiplet IP 与可编程软件组合；未闭环的则是合同承接、训练/后训练成熟度、商业质量、系统支持及 IP/供应责任。关闭以下问题前，仅维持数据隔离、非排他且可回退的 PoC，不作战略投资、整体并购、排他采购或安全关键部署。

## P0 尽调问题

| 问题 | 支持证据 | 限制或反对证据 | 验证动作与触发条件 |
|---|---|---|---|
| Holdings 与 USA 的签约、IP 和收入边界是什么？ | 报告记录研究对象为 Tenstorrent Holdings, Inc.，官网条款另出现 Tenstorrent USA, Inc.。 | 合同、收入、保修、出口、IP 许可与数据责任不能自动互相归属。 | 取得组织图、签约主体、IP/商标权属、授权地域与转授权、维护期限、出口及产品责任材料；任一不清即停止商务推进。 |
| TT 软件栈是否达到 `2.1` 平台的工作负载广度？ | TT-Metalium、TT-NN、TT-Forge/TT-XLA、调试工具、文档、开源代码和开发硬件支持平台化及外部可编程性。 | 未找到充分公开证据证明主流框架上的训练或后训练；生产客户规模、迁移成本和 SLA 也不透明。 | 索取训练/LoRA、算子覆盖、通信、版本兼容、故障回退、生产客户和迁移案例；在目标模型复现前不纳入 2.1 或主训练路径。 |
| 硬件、IP、系统/云的商业质量如何？ | 可订购开发产品、IP 许可表述、约 **1.8 亿美元 closed deals** 与 Galaxy 伙伴名单均有公司口径。 | 无审计收入、订单、回款、单位经济、客户集中度或分类收入披露；closed deals 不是确认收入。 | 按硬件/IP/系统/云取得收入、backlog、毛利、DSO、合同、验收及续约资料；无法审计则维持 PoC。 |
| LSTC、LG、Hyundai、Samsung 与 Galaxy 伙伴的关系是否转化为量产/供货？ | LSTC 选择 RISC-V/chiplet IP；LG 有 chiplet 合作；Hyundai/Samsung 为投资方；Galaxy 公告列出合作/部署伙伴。 | 投资、合作、产品展示和伙伴名单都不等于采购、量产 SOP、排他或长期供货。 | 按对手方核验产品导入、合同、量产里程碑、IP/收入归属、交付数量与支持责任。 |
| Blue Cheetah 的 D2D/DDR/SerDes 能力是否可用于我方自研 SoC？ | 收购公告及 BlueLynx 对 OCP BoW/UCIe 的支持构成能力线索。 | 对价、人员留存、专利/客户合同承接、再许可、产品整合与功能安全责任未公开。 | 在 NDA 下审阅 IP 清单、许可权、RTL/验证/NRE、流片责任、D2D/SerDes、功能安全、BOM 与供货计划。 |

## 决策门槛

在 90 天内先完成主体/IP/供应核验、同模型 GPU 对照和多设备/升级/回滚/故障恢复演练。若端到端 KPI 无显著改进，或迁移与调优人时吞没硬件收益，仅保留技术观察；若没有可执行支持 SLA、BOM/供货计划、IP 权属与量产责任，不进入战略投资、排他采购或产品路线图。

该问题页归属于 [Tenstorrent](../companies/Tenstorrent.md)。
