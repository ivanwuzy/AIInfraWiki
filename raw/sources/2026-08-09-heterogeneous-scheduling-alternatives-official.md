# 异构 Kubernetes 调度替代方案：官方页面（原文摘录）

> Source: https://volcano.sh/ ; https://koordinator.sh/ ; https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html
> Collected: 2026-08-09
> Published: Unknown（官方文档为滚动更新）

以下为横向比较对象的官方页面摘录；它们不涉及上海密瓜智能科技有限公司或 DYNAMIA INTELLIGENCE PTE. LTD. 的法人、融资、订单或 IP。

## Volcano

> Cloud native batch scheduling system for compute-intensive workloads

> Supports integrated job scheduling for both Kubernetes native workloads and mainstream computing frameworks (such as TensorFlow, Spark, PyTorch, Ray, Flink, etc.).

> Heterogeneous Device Support: Efficiently schedules heterogeneous devices like GPU and NPU.

该页还列出统一调度、队列管理、网络拓扑感知、多集群调度、在线离线混部、Gang scheduling、Fair-Share、Binpack、DeviceShare、NUMA-aware 等能力，并说明 Volcano 是 CNCF incubating project。

## Koordinator

> QoS-based scheduling for efficient orchestration of microservices, AI, and big data workloads on Kubernetes

> Koordinator is a modern scheduling system that colocate microservices, AI, and big data workloads on kubernetes. It achieves high utilization by combining elastic resource quota, efficient pod-packing, over-commitment, and resource sharing with container resource isolation.

页面将该项目描述为可选择全套组件或部分组件使用，且为 CNCF sandbox project。

## NVIDIA GPU Operator

> The NVIDIA GPU Operator uses the operator framework within Kubernetes to automate the management of all NVIDIA software components needed to provision GPU. These components include the NVIDIA drivers (to enable CUDA), Kubernetes device plugin for GPUs, the NVIDIA Container Toolkit, automatic node labeling using GFD, DCGM based monitoring and others.

官方文档目录还列有 NVIDIA vGPU、MIG、Time-Slicing、DRA Driver、GPUDirect RDMA/Storage 等专题。此路线在 NVIDIA 环境中是部署和管理基线，但页面没有声称其提供跨厂商 GPU/NPU 统一抽象。

