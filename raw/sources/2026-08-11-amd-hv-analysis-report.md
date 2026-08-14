# AMD（Advanced Micro Devices, Inc.）横纵分析报告

> Source: 本地文件 `横纵研究报告/AMD_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

# AMD（Advanced Micro Devices, Inc.）横纵分析报告

> 研究截止日：2026-08-11｜主体：Advanced Micro Devices, Inc.｜清单分类：1.1 GPGPU；1.4 FPGA；2.1 加速计算平台

## 一句话定义

AMD 以 Instinct 数据中心 GPU、ROCm 软件、EPYC CPU 与 Pensando/FPGA 资产组成对 NVIDIA 的第二平台路径。

## 纵向分析

AMD 从 CPU 与图形业务演进到 chiplet、EPYC 和 Instinct，收购/整合 Xilinx 后扩展 FPGA 与自适应计算，ROCm 则承担 GPU 软件生态追赶。其历史选择是用开放软件和多产品组合争取数据中心份额，但生态成熟度、库覆盖与客户迁移成本仍需按工作负载验证。

## 横向分析

相对 NVIDIA，AMD 的潜在优势是开放性、CPU/GPU 组合与供应商多样性；短板是 CUDA 兼容、软件工具和部分模型优化的迁移成本。相对 TPU/ASIC，Instinct 更通用；相对国产方案，AMD 供应与生态更成熟但主权/成本未必占优。

## 横纵交汇与动作

EPYC、chiplet、Xilinx 与 ROCm 的历史累积让 AMD 具备第二平台条件，但软件兑现决定其能否进入关键训练集群。最可能是高端 GPU 双供；危险剧本是 ROCm 生态追赶不足；乐观剧本是开放生态与 CPU/GPU 组合扩大。机器人公司应做 ROCm 迁移 PoC 和双源采购，不以 AMD 单独替代所有 CUDA 负载。

## 冲突与未确认事项

具体 Instinct SKU、ROCm 版本、模型性能、交期、价格、客户折扣和 FPGA/网络产品归属需按采购场景复核。

## 产业链分类复核（报告末尾）

**主分类：** `1.1 GPGPU（AI GPU）`。**次分类：** `2.1 加速计算平台`（ROCm）与 `1.4 其他 AI 芯片架构`（FPGA/自适应计算）；次分类分别对应软件平台和 Xilinx 产品线，不替代 GPU 主分类。

## 信息来源与方法

本报告基于 AMD 年报、产品页和 ROCm 公开文档的已知框架；交易前应补充最新 SEC 披露、SKU 规格、第三方基准与客户验证。
