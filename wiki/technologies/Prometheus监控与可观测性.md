# Prometheus （普罗米修斯）监控与可观测性

> Sources: Google Cloud, 2026-08-13; Prometheus 官方文档, CNCF
> Updated: 2026-08-13

## Overview

Prometheus 是一个开源的**系统监控与告警工具包**，最初由 SoundCloud 开发，2016 年加入 CNCF（Cloud Native Computing Foundation），是继 Kubernetes 之后第二个从 CNCF 毕业的项目。它已成为云原生生态中**事实上的监控标准**，但不是 Kubernetes 的内置组件，二者是"共生关系"而非"绑定关系"。

Prometheus 的核心价值在于：通过**多维数据模型（Metric + Label）**、**Pull（拉取）模式**和**PromQL 查询语言**，为软件层（应用、容器、OS）提供统一、可扩展的指标采集、存储和告警能力。它不覆盖芯片/硬件级的物理状态监测，也不涉及能耗调优、故障预测或芯片寿命管理。

## 核心概念

| 概念 | 说明 |
|------|------|
| Metric（指标） | 监控的度量项，如 `http_requests_total` |
| Label（标签） | 键值对，用于维度标识，如 `method="GET"`、`status="200"` |
| Sample（样本） | 时序数据点，包含 timestamp + value |
| Time Series（时间序列） | 同一 metric + 同一组 labels 的样本序列 |
| Job / Instance | Job 是同类目标的逻辑分组，Instance 是单个目标端点 |

时间序列示例：`http_requests_total{job="api-server", instance="10.0.0.1:9090", method="GET", status="200"}`

## 架构组件

```
被监控目标（Exporter / 应用 /metrics）──→ Prometheus Server（拉取 + 存储 + 查询）
                                              │
                          ┌───────────────────┼───────────────────┐
                          ↓                                       ↓
                    Alertmanager                            Grafana / UI
                  （告警去重、分组、路由、通知）              （可视化仪表盘）
```

| 组件 | 作用 |
|------|------|
| **Prometheus Server** | 核心：定时拉取指标、存储时序数据、执行 PromQL |
| **Exporter** | 把第三方系统（Linux、MySQL、Nginx 等）的指标暴露为 Prometheus 格式 |
| **PushGateway** | 接收短期/批处理任务主动推送的指标（避免任务结束就丢数据） |
| **Alertmanager** | 告警去重、分组、抑制、静默，然后路由到邮件/Slack/PagerDuty |
| **Grafana** | 数据可视化，社区有海量现成的仪表盘模板 |

## 数据模型：Pull 模式

Prometheus 主动向目标端点的 `/metrics` HTTP 地址发起 GET 请求，拉取指标数据。返回格式（文本协议示例）：

```
# HELP http_requests_total The total number of HTTP requests.
# TYPE http_requests_total counter
http_requests_total{method="POST", code="200"} 1027
http_requests_total{method="GET", code="404"} 3
```

## 主要特性

- **多维数据模型**：Metric + Label 组合，灵活聚合，无需预先定义固定层级
- **PromQL 查询语言**：强大的聚合、运算、函数支持，如 `rate(http_requests_total[5m])` 计算每秒请求速率
- **Pull 模式**：无需在目标上安装 Agent，Prometheus 自己掌握采集节奏，目标健康状态一目了然
- **服务发现**：原生支持 Kubernetes、Consul、DNS、EC2 等，自动发现监控目标
- **无外部依赖**：单机就能跑，自带时序数据库，不依赖外部数据库
- **社区生态丰富**：数百个 Exporter、Grafana 仪表盘、告警规则

## 典型使用场景

1. **Kubernetes 容器监控** — 最核心场景，与 k8s 深度集成
2. **微服务可观测性** — 每个服务暴露 `/metrics`，覆盖请求量、延迟、错误率（RED 指标）
3. **基础设施监控** — 通过 `node_exporter` 监控 CPU、内存、磁盘、网络
4. **应用性能监控（APM）** — 自定义业务指标
5. **黑盒探测** — 通过 `blackbox_exporter` 做 HTTP/DNS/TCP 端点探测

## Prometheus 与 Kubernetes 的关系

Prometheus 不是 Kubernetes 的内置组件，但它是 K8s 生态中**事实上的监控标准**：

- **同为 CNCF 项目**：Kubernetes 是 CNCF 第一个毕业项目，Prometheus 是第二个，社区高度重叠。
- **K8s 原生支持 Prometheus 格式**：Kubernetes 自身组件（kubelet、kube-apiserver 等）暴露的 `/metrics` 端点就采用 Prometheus 文本格式，不需要额外转换。配合 `kube-state-metrics` 可以监控 Pod、Deployment、Node 等所有 K8s 资源对象。
- **服务发现深度集成**：Prometheus 能直接对接 K8s API，自动发现 Pod、Service、Node、Ingress 等监控目标，无需手动配置 IP 列表。

所以关系本质是：**K8s 提供监控数据的来源和服务发现能力，Prometheus 负责采集、存储、查询和告警。** 绝大多数 K8s 集群都会部署 Prometheus，但也可以选择其他监控方案。

## 替代产品

| 类型 | 产品 | 特点 |
|------|------|------|
| **开源兼容层** | Grafana Mimir | Prometheus 的横向扩展存储后端，完全兼容 PromQL |
| **开源兼容层** | Thanos / Cortex | Mimir 的前身/同类方案，实现全局视图和长期存储 |
| **开源替代** | VictoriaMetrics | 兼容 PromQL 的时序数据库，更低资源占用 |
| **开源替代** | InfluxDB + Telegraf | Push 模式时序监控，与 Prometheus 的 Pull 理念不同 |
| **开源替代** | OpenTelemetry | 更高一层的统一采集层，不存数据，可输出到 Prometheus |
| **商业 SaaS** | Datadog | 全托管可观测性平台（指标+日志+APM），开箱即用 |
| **商业 SaaS** | Grafana Cloud | 托管 Prometheus/Mimir + Loki + Tempo 全家桶 |
| **商业 SaaS** | Chronosphere | 前 Uber M3 团队创立，专注大规模云原生监控 |

## 开源与商业化生态

**Prometheus 本身是完全开源的**（Apache 2.0 许可证），不会有关闭的闭源版本。但围绕它生长出了可观的商业公司：

- **Grafana Labs**（估值约 60 亿美元）：核心产品 Grafana 开源，商业产品 Grafana Cloud 提供托管 Prometheus（Mimir）、托管 Loki（日志）和托管 Tempo（链路追踪），统称 LGTM 栈。典型的"开源+云托管"商业模式。
- **Chronosphere**（2026 年被 Palo Alto Networks 收购）：前 Uber 工程师创立，做超大规模型监控，定位比 Grafana Cloud 更偏高端企业。

核心逻辑：Prometheus 作为标准协议和开源内核，已经像 Linux 一样成为行业基础设施。商业公司不再靠卖 Prometheus 本身赚钱，而是靠**托管服务、大规模存储引擎、企业级治理和可观测性全家桶**来商业化。

## Prometheus 与博思芯宇的差别

两者不在同一个维度上竞争。**Prometheus 是"系统的体温计"，博思芯宇想做的是"芯片的体检报告+心脏监测+中医调理"。**

### 定位层级完全不同

| 维度 | Prometheus | 博思芯宇 |
|------|-----------|---------|
| **监控对象** | 软件系统（应用、容器、OS）的指标，如 CPU 利用率、内存、请求数 | 芯片/硬件的物理和微架构状态，如时序裕量、电压、温度、老化程度、静默数据损坏 |
| **数据来源** | 应用暴露的 `/metrics` HTTP 端点 | 芯片内嵌的 DFX 遥测、微架构 ATPG 测试、传感器数据 |
| **粒度** | 进程/容器/节点级（软件层） | 芯片内核/微架构级（硬件层，比 Prometheus 深 2-3 层） |
| **核心能力** | 采集、存储、告警、查询 | 健康建模、故障预测、功耗调优、RAS 调度、芯片寿命管理 |

### 对"健康"的定义不同

Prometheus 的健康概念是："服务是否在响应？5xx 是否增多？磁盘是否快满了？"——本质是**可用性监控**，读到的是 OS 和应用的指标。

博思芯宇的健康概念是："这颗芯片的时序裕量是否在退化？硅片老化到了什么阶段？是否即将出现静默数据损坏（SDC）？"——本质是**芯片级可靠性管理**，读到的是芯片内部的物理信号。

### 价值链条中的位置

```
芯片物理信号 → 博思芯宇 → 芯片健康模型 → 能耗/故障预测 → 集群调度
                                                          ↑
                                                 Prometheus 监控到这里
                                                          |
                                                  应用指标 → 告警/可视化
```

### 商业模式差异

- **Prometheus**：完全开源（Apache 2.0），不直接产生收入。商业化由上游公司（Grafana Labs 的 Mimir、Chronosphere 等）做托管或大规模存储层完成。
- **博思芯宇**：早期创业公司（2024 年 7 月成立），商业模式混合——目前以算力卡代采、服务器优化、运维服务产生现金流，长期目标是芯片 IP 嵌入。收入、性能和客户验收都还在验证阶段。

### 可替代性

- **Prometheus 有大量替代品**：Grafana Mimir、VictoriaMetrics、Thanos 在存储和查询层替代；Datadog、New Relic 在 SaaS 层替代；OpenTelemetry 在采集层统一标准。
- **博思芯宇的替代品**：最接近的国际对标是 proteanTecs（以色列公司，芯片内监测与分析），但 proteanTecs 更像芯片设计和生产流程中的基础设施供应商，博思从智算集群运维切入。国内没有公开的直接同类。如果博思的产品不能证明芯片级增量，则会退化为普通的 GPU 监控工具，与 Prometheus 生态直接竞争——但那是博思的失败剧本。

### 两者能否共存

**可以，而且应该共存。** 博思芯宇的芯片级健康数据可以作为 Prometheus 的"新数据源"。一个典型部署可以是：

```
芯片 → 博思芯宇 Agent → 芯片健康指标 → 暴露为 /metrics 端点 → Prometheus 拉取 → Grafana 展示 + Alertmanager 告警
```

博思解决的是"Prometheus 根本看不到的芯片底层信号"，Prometheus 解决的是"博思不擅长的通用存储、查询和告警路由"。这不是替代关系，而是**上下游关系**——这也是为什么知识库把博思归类为 **3.7 监控与健康管理软件**（属于 Prometheus 生态的上游数据生产者），而不是"Prometheus 替代品"。

## 知识库中的同类页面

- [博思芯宇（Bosi Xinyu）](../companies/博思芯宇（BosiXinyu）.md) — 芯片/节点健康与可靠性管理候选，主类 3.7
- [proteanTecs](../companies/proteanTecs.md) — 芯片内监测 IP 与分析平台
- [Datadog](../companies/Datadog.md) — 统一遥测与安全信号的云端可观测性 SaaS，主类 3.7
- [Chronosphere](../companies/Chronosphere.md) — 云原生可观测性，主类 3.7（已被 Palo Alto Networks 收购）
- [3.7 监控与健康管理软件](../segments/3.7-监控与健康管理软件.md) — 产业链环节页