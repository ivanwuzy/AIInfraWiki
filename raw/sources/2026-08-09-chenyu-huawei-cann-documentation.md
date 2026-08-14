# 华为昇腾 CANN 社区版文档首页

> Source: https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/82RC1alpha002/index/index.html
> Collected: 2026-08-09
> Published: 2025-05-19（页面显示更新时间；页面为 CANN 8.2.RC1.alpha002）

## 原文摘录

异构计算架构CANN（Compute Architecture for Neural Networks）是昇腾针对AI场景推出的异构计算架构，向上支持多种AI框架，包括MindSpore、PyTorch、TensorFlow等，向下服务AI处理器与编程，发挥承上启下的关键作用，是提升昇腾AI处理器计算效率的关键平台。同时针对多样化应用场景，提供多层次编程接口，支持用户快速构建基于昇腾平台的AI应用和业务。

### 算子、图和通信

- Ascend C算子开发：基于Ascend C算子编程语言进行算子开发。
- TBE&AI CPU算子开发：基于TBE、AI CPU接口开发TBE和AI CPU自定义算子。
- 毕昇编译器：使用毕昇编译器将算子代码编译成二进制可执行文件和动态库等形式的指导。
- Ascend Graph开发：基于GE提供的Ascend Graph接口构图。
- DataFlow开发：基于DataFlow C++和Python API构图（FlowGraph），支持用户通过FuncProcessPoint和GraphProcessPoint编写自定义处理函数。
- HCCL集合通信库：基于昇腾AI处理器的高性能集合通信库，提供单机多卡以及多机多卡间的数据并行、模型并行集合通信方案。
- ATB加速库：介绍Ascend Transformer Boost加速库的使用方法，提升Transformer模型的训练和推理开发效率。
- LLM DataDist：使用LLM DataDist接口对大模型的推理进行分离部署，从而提高大模型推理的吞吐性能。

### 开发与迁移工具

- ATC离线模型编译工具：模型转换工具，将网络模型转换为昇腾AI处理器支持的 `.om` 格式离线模型。
- AOE调优工具：自动调优工具，充分利用硬件资源，提升网络的性能。
- 分析迁移工具：将PyTorch训练脚本一键式迁移至昇腾NPU。
- 精度调试工具：精度比对，辅助定位模型精度问题。
- 性能调优工具：训练、推理各运行阶段的性能数据采集和分析。
- 算子及模型速查工具：查询当前版本CANN支持的模型和算子信息。

### 与机器人有关的公开表述

OpenHiva应用开发基于OpenHiva框架进行应用开发，为机器人业务提供高性能、高安全的通信和数据传输能力。

版权所有 © 2021-2026华为技术有限公司 保留一切权利。

