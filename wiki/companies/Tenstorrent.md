# Tenstorrent

> Sources: Tenstorrent 横纵分析报告（本地研究报告）, 2026-08-11
> Raw: [Tenstorrent 横纵分析报告](../../raw/sources/2026-08-11-tenstorrent-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Tenstorrent Holdings, Inc. 是以 Tensix 专用 AI 加速器、RISC-V CPU/IP、chiplet 设计及开放软件栈为组合交付的非 GPU 计算公司。其公开交付与路线覆盖 Grayskull、Wormhole、Blackhole 开发产品、工作站及 Galaxy 系统，并以 AI/RISC-V IP 和协同设计进入定制芯片路径。对人形机器人公司，它更适合作为可回退的特定推理负载与自研 SoC 架构/IP 研究期权，而非主训练栈替代品。

## 分类与产品边界

- **主分类：**[1.14 其他AI芯片架构（Tensix 专用加速器/RISC-V/Chiplet）](../segments/1.14-其他AI芯片架构.md)。Tensix 专用加速器、开发卡/工作站/系统及 AI/RISC-V IP 是当前可验证的价值承载物；其不属于 GPGPU、图形 GPU 或通用 NPU。
- **不设正式 2.1 次分类。** TT-Metalium、TT-NN、TT-Forge/TT-XLA、设备管理、调试工具与开发者资源证明其并非固定模型转换器，且报告按公开材料评分为 `80/100`。但本库 `2.1` 的训练或后训练工作负载广度硬条件未获充分公开证据支持；总分不能替代硬条件，不列入 2.1 加速计算平台（CUDA-like）。
- **不设 2.2、5.1 或 5.2 正式分类。** 算子、框架入口和工具的可验证作用仍是绑定自家硬件与 IP；没有证据表明独立跨硬件算子软件或训练/推理框架是其商业主承载物。

## 交付、资本与协同边界

- 2024 年 Wormhole n150/n300 开发套件及 TT-LoudBox/TT-QuietBox 工作站，和 2025 年 Blackhole p100/p150/TT-QuietBox，支持“可订购或用于开发”的判断；不支持规模量产、通用训练集群或已验证数据中心交付的判断。
- 公司 2023 年称销售 AI processors，并许可 AI 与 RISC-V IP；LSTC 选择其 RISC-V/chiplet IP 并进行边缘 2nm accelerator co-design。该关系支持 IP/联合设计线索，不支持已流片、量产、授权收入或供货结论。
- 2024 年 Series D 公告称融资 **over 6.93 亿美元**、融资前估值 **20 亿美元**、约 **1.8 亿美元 closed deals**。closed deals 未披露会计期间、履约、毛利或回款，不能作为确认收入；投资方和 Galaxy 公告中的伙伴名单也不等于客户订单。
- 2025 年收购 Blue Cheetah Analog Design 后，公司公告称获得 D2D、DDR、SerDes 与 OCP BoW/UCIe 相关能力。人员留存、IP 可转授权范围、历史客户合同及产品整合里程碑仍待核验。

## 对人形机器人的动作建议

- **采购/合作：**只做可退出的付费 PoC，优先固定版本的 VLM/LLM、视觉理解、语音或数据处理等非安全关键负载；与 GPU 基线同时测量精度、TTFT、吞吐、p99、功耗、故障恢复和工程人时。
- **投资：**观察。先获得硬件/IP/系统/云分别拆分的收入、backlog、毛利、DSO、客户合同、支持 SLA 与供应资料。
- **并购：**不建议整体收购；仅在 IP、团队或资产可分离、可转让且供货与软件维护责任清晰时评估选择权。
- **自研：**可在 NDA 后研究 RISC-V、AI accelerator、D2D/SerDes、UCIe/BoW 与编译器/IP 边界；不以其替代主 CUDA 训练栈，也不进入安全关键运动控制主路径。

## 冲突与不确定性

Tenstorrent Holdings, Inc. 与其官网条款中出现的 Tenstorrent USA, Inc. 的合同、收入和签约责任不能自动互相归属。软件栈已有多代、低层可编程和开发者产品证据，但公开材料未充分证明主流框架训练/后训练、生产客户规模、迁移成本和支持 SLA；因此对 `2.1` 的结论是“未满足硬条件”，不是“软件不存在”。详见 [Tenstorrent关键尽调问题](../questions/Tenstorrent关键尽调问题.md)。
