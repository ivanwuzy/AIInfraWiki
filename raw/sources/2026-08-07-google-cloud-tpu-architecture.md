# TPU architecture

> Source: https://cloud.google.com/tpu/docs/system-architecture-tpu-vm
> Collected: 2026-08-07
> Published: Unknown

Google Cloud 文档说明：

> Tensor Processing Units (TPUs) are application specific integrated circuits (ASICs) designed by Google to accelerate machine learning workloads.

> TPUs are designed to perform matrix operations quickly making them ideal for machine learning workloads.

“How a TPU works”一节说明：

> Google designed Cloud TPUs as a matrix processor specialized for neural network workloads.

> The primary task for TPUs is matrix processing, which is a combination of multiply and accumulate operations. TPUs contain thousands of multiply-accumulators that are directly connected to each other to form a large physical matrix. This is called a systolic array architecture.

文档还说明 TPU 的 Matrix Multiplication Unit (MXU) 从 HBM 装载参数；一个 TensorCore 包含一个或多个 MXU、vector unit 和 scalar unit。
