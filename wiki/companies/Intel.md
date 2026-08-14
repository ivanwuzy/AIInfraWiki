# Intel

> Sources: Intel Corporation 横纵分析报告（本地报告，研究截止日 2026-08-11）
> Raw: [Intel Corporation 横纵分析报告](../../raw/sources/2026-08-11-intel-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Intel 是以 x86 CPU 装机基础、异构 xPU 与 oneAPI 软件栈为抓手，同时经营 Intel Foundry 的超大规模半导体平台。对人形机器人公司的现实价值是 Xeon/x86、Core Ultra/OpenVINO 与异构软件兼容层；Gaudi 训练/推理加速器只能作为有明确退出条件的备选 PoC，不能据此替代 CUDA 主训练路径。

## 分类与产品边界

- **主分类：**[1.14 其他AI芯片架构（CPU/IPU/定制 ASIC）](../segments/1.14-其他AI芯片架构.md)。现有分类没有通用 CPU/IDM/Foundry 标签；Intel 的已验证 AI 组合包括 CPU、GPU、NPU、IPU、AI 加速器和定制 ASIC，故以最少误称单一路线的 `1.14` 记录其 AI 价值创造。该标签不表示 AI 加速器是其总收入主体，亦不把 Foundry 误作 AI 芯片销售。
- **正式次分类：**[2.1 加速计算平台（CUDA-like）](../segments/2.1-加速计算平台.md)。oneAPI 的跨代平台定位、DPC++/SYCL、oneDNN/oneMKL、oneCCL、PyTorch/ONNX/OpenVINO 入口和 VTune 等工具，满足本库的硬条件；本报告评估平台完整度为 `90/100`。评分只表示软件栈完整度，不代表性能、兼容率或生态规模超过 CUDA。
- **已商业化但不作为分类扩张：**Xeon/x86、Core Ultra 内置 NPU、Gaudi 和数据中心 GPU 均为产品线；公开证据不足以将 Intel 整体主归为 `1.1 GPGPU` 或 `1.3 NPU`，也不足以将网络/IPU、Foundry 服务列为 `1.8` 或 `1.9` 的正式分类。
- **资产边界：**Altera 已不再并表，不能把 FPGA 产品、客户或技术资产自动并入 Intel；相关实时数据面需求须与 [Altera](Altera.md) 分别审查。

## 已验证的产品、软件与商业边界

- 截至 FY2025，Intel 以 CCG、DCAI 和 Intel Foundry 报告经营；FY2025 合并营收为 `528.53 亿美元`，FY2024 为 `531.01 亿美元`。这支持其产品与交付基础，并不支持其在生成式 AI 加速器处于领先地位。
- oneAPI/OpenVINO 适合 CPU、边缘推理、ONNX/PyTorch 工程和多后端 CI 的选择性采用；其公开接口不保证不同硬件的结果或性能相同。Gaudi 的 SynapseAI、PyTorch 和以太网集群路径属于已发布产品/软件证据，但目标 VLA 的收敛、迁移工时、故障恢复与 TCO 仍未被本报告独立验证。
- Core Ultra 的 CPU+GPU+NPU 组合可用于研发 PC、轻量视觉、现场网关和离线开发；它不等同于机器人安全控制器或高帧率多相机主推理方案。Intel Foundry 的制程、封装、制造、组测和设计使能可作为长周期自研 ASIC 的尽调选项，不是已承诺的本项目产能。
- Intel 在 `2025-09-12` 完成 Altera `51%` 股权处置；Intel 仅保留 `49%` 并改按权益法核算。该关系变化直接影响 FPGA 采购、支持和 IP 边界。

## 对人形机器人的动作建议

- **训练主集群：**维持 NVIDIA/CUDA 为低项目风险基线；Gaudi 仅以冻结模型、数据切片、精度和网络条件进行受控 PoC，并同 NVIDIA/AMD 比较吞吐、收敛、故障恢复、单位有效训练步成本和迁移人周。
- **数据处理、仿真与企业服务：**采购 Xeon/x86 时保留 AMD/Arm 对照，按 ROS 2、仿真、解码和编译流水线实测 perf-per-watt、三年 TCO、主板/网卡/ECC/驱动及区域供货。
- **边缘与软件：**对 Core Ultra/OpenVINO 小范围 PoC，固定模型、输入、量化和温度条件，验收端到端 p50/p99、抖动、功耗与 Linux 维护成本；为 ONNX/PyTorch 建立 golden set、算子覆盖报告、精度阈值和多后端 CI。
- **投资、并购与自研：**不建议投资或并购 Intel 整体。Foundry 仅作非排他的 DD 候选；若未来出现可分拆的软件、边缘工具或制造资产，再以 IP、人员、合同、过渡服务和供应责任单独评估。

## 冲突与不确定性

> **Status: Disputed**
> Gaudi 的公开规格、SynapseAI 和 PyTorch 路径支持其作为备选训练/推理产品；但本报告没有同模型、同精度、同网络条件下的 VLA 收敛、可用性、迁移人力或 TCO 证据，且开发者 issue 反映持续工程摩擦。因此不裁决其“更快/更便宜”，只作为 PoC 假设。详见 [Intel关键尽调问题](../questions/Intel关键尽调问题.md)。

- NVIDIA 的战略投资与协同开发是已披露的资本/合作关系，不能推导为并购、独家合作、GPU 配额或对 Gaudi 的采购承诺。
- CHIPS/Secure Enclave 安排强化美国制造的战略地位，但带有股份和 Foundry 持股条件；不能将政府安排当作无条件补贴或本项目产能保证。
- 机器人客户、联合研发和可量化订单在本报告的公开资料范围内尚未确认，不能用生态展示替代客户证据。
