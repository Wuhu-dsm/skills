# Personal Codex Skills

这个仓库用于存放我的个人 Codex Skills。每个 skill 都是一个独立的工作流，用来把可复用的方法、检查清单和操作规范沉淀下来，让 Codex 在处理特定任务时更稳定、更专业。

## 当前 Skills

| Skill | 用途 |
| --- | --- |
| `fullstack-project-learning` | 快速学习、熟悉或逆向理解一个陌生的前端、后端或全栈项目。它会引导 Codex 先梳理架构，再追踪端到端业务链路，最后设计小而可验证的学习练习。 |

## 仓库结构

```text
skills/
└── fullstack-project-learning/
    └── SKILL.md
```

每个 skill 目录至少包含一个 `SKILL.md` 文件。`SKILL.md` 使用 YAML frontmatter 描述 skill 的名称和触发场景，正文则定义具体工作流。

## 安装方式

克隆仓库：

```bash
git clone https://github.com/Wuhu-dsm/skills.git
cd skills
```

将需要的 skill 复制到本地 Codex skills 目录。

Windows PowerShell：

```powershell
Copy-Item -Recurse .\fullstack-project-learning $env:USERPROFILE\.codex\skills\
```

macOS / Linux：

```bash
cp -R ./fullstack-project-learning ~/.codex/skills/
```

复制完成后，重启 Codex 或开启一个新会话，让新的 skill 被重新发现。

## 使用示例

在一个陌生项目中，可以这样请求 Codex：

```text
请使用 fullstack-project-learning，帮我快速学习这个全栈项目。
先不要改代码，先梳理项目结构、启动方式、核心业务链路和推荐阅读顺序。
```

也可以指定某个功能链路：

```text
请使用 fullstack-project-learning，追踪登录功能从前端页面到后端接口再到数据库的完整链路。
要求引用具体文件路径，并区分事实和推断。
```

## Skill 设计原则

这个仓库里的 skill 尽量遵守以下原则：

- 聚焦具体任务，不做泛泛而谈的提示词集合
- 默认先读代码和项目约定，再提出修改建议
- 对关键结论引用具体文件路径
- 把复杂任务拆成可验证的小步骤
- 在改代码前先给计划、风险点和验证方式
- 在改代码后运行合适的验证命令并说明剩余风险

## 贡献约定

新增 skill 时建议使用以下结构：

```text
skill-name/
└── SKILL.md
```

`SKILL.md` 的 frontmatter 示例：

```yaml
---
name: skill-name
description: 简洁说明这个 skill 应该在什么场景下被使用。
---
```

正文建议包含：

- 适用场景
- 不适用场景
- 核心工作流
- 检查清单
- 输出格式
- 验证方式

保持 skill 简洁、可执行、可复用。复杂参考资料可以放到 `references/`，脚本可以放到 `scripts/`，但不要为了完整而堆砌上下文。
