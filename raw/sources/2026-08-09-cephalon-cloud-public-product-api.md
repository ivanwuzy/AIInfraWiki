# Cephalon Cloud 公共产品接口响应摘录

> Source: https://prod.unicorn.org.cn/cephalon/user-center/v1/prices/categories ; https://prod.unicorn.org.cn/cephalon/user-center/v1/prices/cheapest ; https://prod.unicorn.org.cn/cephalon/user-center/v1/user/missions/categories?page_index=1&page_size=10 ; https://prod.unicorn.org.cn/cephalon/user-center/v1/user/missions/categories/sort
> Collected: 2026-08-09
> Published: Unknown

以下为无需登录即可返回的 JSON 原文节选。接口没有给出 `count` 与 `used_times` 的统计定义，也没有给出这些资源的产权、供应商、可用区、客户合同、收入或 SLA。

`GET /prices/categories`：

```json
{"code":20000,"msg":"操作成功","data":[
  {"count":55,"mission_category":"COMFYUI_TEMU"},
  {"count":55,"mission_category":"FOOOCUS"},
  {"count":55,"mission_category":"SD_BINGO"},
  {"count":55,"mission_category":"COMFYUI_LINGCHUANG"},
  {"count":55,"mission_category":"SVD_BACK"},
  {"count":55,"mission_category":"OLLAMA_DEEP_SEEK_IQ"},
  {"count":55,"mission_category":"SGLANG"},
  {"count":275,"mission_category":"COMFYUI"},
  {"count":55,"mission_category":"COGVIDEO"},
  {"count":55,"mission_category":"SSH"}
]}
```

`GET /prices/cheapest` 的一个返回对象：

```json
{"code":20000,"msg":"操作成功","data":[{
  "gpu_version":"RTX5090",
  "mission_category":"COMFYUI",
  "mission_type":"comfyui_advance_time",
  "mission_billing_type":"time",
  "cep":48,
  "original_cep":70,
  "super_node_cep":50,
  "quick_start":false,
  "is_deprecated_super_node":true,
  "edges":{"gpu":{"version":"RTX5090","video_memory":32,"memory":128,"cpu":12,"power":1200}}
}]}
```

`GET /user/missions/categories?page_index=1&page_size=10`：

```json
{"code":20000,"msg":"操作成功","data":{"page_index":1,"page_size":10,"total":122,"list":[
  {"created_at":"2026-06-30T17:15:22.497862+08:00","category":"COMFYUI_RUN","type":"unknown","nick_name":""},
  {"created_at":"2026-05-07T18:53:00.552247+08:00","category":"K_COMFYUI_SSH","type":"unknown","nick_name":""},
  {"created_at":"2026-03-23T19:15:53.6767+08:00","category":"QWEN3_EMBEDDING","type":"unknown","nick_name":""},
  {"created_at":"2026-03-02T11:38:38.496974+08:00","category":"UBUNTU_VNC","type":"unknown","nick_name":""},
  {"created_at":"2026-02-24T15:23:44.813844+08:00","category":"BLENDER","type":"unknown","nick_name":""},
  {"created_at":"2024-11-06T10:45:18.333087+08:00","category":"SGLANG_LLAMA","type":"unknown","nick_name":""},
  {"created_at":"2024-10-09T11:38:00+08:00","category":"ASCEND","type":"unknown","nick_name":"Ascend"},
  {"created_at":"2024-04-13T16:09:54.926+08:00","category":"COMFYUI","type":"unknown","nick_name":"ComfyUI"},
  {"created_at":"2024-04-11T16:09:54.896+08:00","category":"SD_FIRE","type":"unknown","nick_name":"Stable Diffusion 炎推 AI 版"}
]}}
```

`GET /user/missions/categories/sort`：

```json
{"code":20000,"msg":"操作成功","data":[
  {"mission_category":"OPEN_CL","used_times":445120},
  {"mission_category":"JP_QINGLONG","used_times":424271},
  {"mission_category":"WAITING","used_times":421013},
  {"mission_category":"UBUNTU_VNC","used_times":402037},
  {"mission_category":"COMFYUI","used_times":312463},
  {"mission_category":"COMFYUI_ADVANCED_VIDEO","used_times":125037},
  {"mission_category":"SD","used_times":99622},
  {"mission_category":"SSH","used_times":10225}
]}
```

说明：原接口响应中的类别、金额和计数具有动态性。本文件只记录采集时的原文；任何数字不应被解释为公司收入、GPU 台数、独立客户数或已完成订单数。
