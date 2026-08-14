# 星云智联 RNIC IP 产品页

> Source: http://www.nebula-matrix.com/RNIC_IP
> Collected: 2026-08-09
> Published: Unknown

以下为公司官网产品页的原文节选，删除了导航、页脚和重复的联系方式。

## 产品概述｜RNIC（RDMA NIC）IP

星云智联自主研发的RNIC(RDMA NIC) IP核专为满足高性能计算（HPC）、人工智能（AI）大模型训练与推理等场景的极致需求而设计，基于全自研核心技术架构，提供高效、稳定、可扩展的scale out和scale up解决方案。该IP核支持RoCEv2协议，兼容主流集合通信库（如NCCL、DeepEP、XCCL），并通过自研算法和协议优化，显著提升分布式系统的通信效率，为AI算力集群、数据中心互联等场景提供坚实的技术底座。星云RDMA IP已完成多次流片，测试效果优异，稳定性高，和多家国内头部GPU公司和互联网公司合作，已实现商用落地。

## 产品特性

- 以太接口：支持1*200G、2*200G、1*400G、2*400G等形态的以太接口
- 基础网络功能：支持通过软件TCP/IP协议栈收发包，具备TSO、Checksum卸载能力；兼容SUE（scale up ethernet）
- RDMA协议兼容：支持UD/RC/XRC/自研SRP；自研SRP协议支持RC全语义的write/Atomic/Send/Read操作，支持自适应路由、逐包多路径
- RDMA性能：消息速率双向200M mps，可扩展至双向400M mps；单QP支持线速满带宽；延迟低至1us
- RDMA特性：支持256K QP（可扩展），16M MR，超时重传、快速重传，RoCEv2使用Go back-N机制，SRP使用选择性重传，支持GDR，GDS，IBGDA
- Qos:支持基于VF、TC、PORT的调度，支持DWRR调度，支持PFC流控
- 拥塞控制算法：支持DCQCN、NBL-CC，基于RTT的可编程拥塞控制算法（PCC）
- 主流框架集成：支持Verbs接口，深度适配NCCL、XCCL、NvShmem、DeepEP开源通信库
- 存储协议支持：支持NVME、NFS、ISER、SMB, 分布式存储系统（CEPH 分布式文件系统 对象存储 块存储）
- 扩展性：支持SUE（Scale Up Ethenet）协议,支持内存语义load、store操作

星云的RNIC IP可以集成到CPU/GPU/XPU上用作scale out的IO解决方案，也可以使用RNIC IP中扩展的load、store操作配合精简流程和快速路径作为scale up的IO解决方案。
