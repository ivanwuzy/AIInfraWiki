#!/usr/bin/env python3
"""Render the completed Shanxi Qinyun Markdown report as a paginated CJK PDF."""

from __future__ import annotations

import html
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    LongTable,
    PageBreak,
    Paragraph,
    Spacer,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[2]
INPUT = ROOT / "横纵研究报告/山西秦云_横纵分析报告.md"
OUTPUT = ROOT / "横纵研究报告/山西秦云_横纵分析报告.pdf"
FONT_FILE = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT = "STHeiti"
PAGE_WIDTH, PAGE_HEIGHT = A4
LEFT = RIGHT = 18 * mm
TOP = 22 * mm
BOTTOM = 20 * mm


def inline(markdown: str) -> str:
    """Convert the small Markdown subset used in the report to ReportLab markup."""
    text = html.escape(markdown.strip())
    text = re.sub(
        r"\[([^\]]+)]\(([^)]+)\)",
        lambda m: f'<a href="{html.unescape(m.group(2))}" color="#1a5276">{m.group(1)}</a>',
        text,
    )
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"`(.+?)`", rf'<font face="{FONT}" color="#384b55">\1</font>', text)
    return text


def parse_table(lines: list[str], style: ParagraphStyle, usable_width: float) -> LongTable:
    rows: list[list[Paragraph]] = []
    for line in lines:
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if all(re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in cells):
            continue
        rows.append([Paragraph(inline(cell), style) for cell in cells])

    columns = max(len(row) for row in rows)
    for row in rows:
        row.extend([Paragraph("", style)] * (columns - len(row)))

    header_lengths = [len(rows[0][index].getPlainText()) for index in range(columns)]
    weights = [max(1.0, length**0.5) for length in header_lengths]
    if columns == 2:
        weights = [1.0, 1.0]
    elif columns == 3:
        weights = [0.85, 1.15, 1.35]
    elif columns == 4:
        weights = [0.62, 1.12, 0.82, 1.44]
    elif columns >= 5:
        weights = [0.45, 0.95, 0.55, 1.35, 1.35][:columns]
    total = sum(weights)
    widths = [usable_width * weight / total for weight in weights]

    table = LongTable(rows, colWidths=widths, repeatRows=1, hAlign="LEFT", splitByRow=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1a5276")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), FONT),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#b8c9d1")),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f4f8fa")]),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return table


def on_page(canvas, doc) -> None:
    if doc.page == 1:
        return
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d7e1e6"))
    canvas.setLineWidth(0.35)
    canvas.line(LEFT, PAGE_HEIGHT - 13 * mm, PAGE_WIDTH - RIGHT, PAGE_HEIGHT - 13 * mm)
    canvas.setFillColor(colors.HexColor("#70838d"))
    canvas.setFont(FONT, 7.5)
    canvas.drawString(LEFT, PAGE_HEIGHT - 10 * mm, "山西秦云企业管理有限公司 | 横纵分析报告")
    canvas.setStrokeColor(colors.HexColor("#1a5276"))
    canvas.line(LEFT, 13 * mm, PAGE_WIDTH - RIGHT, 13 * mm)
    canvas.setFillColor(colors.HexColor("#70838d"))
    canvas.drawCentredString(PAGE_WIDTH / 2, 8 * mm, f"第 {doc.page} 页")
    canvas.restoreState()


def make_styles() -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    common = {"fontName": FONT, "wordWrap": "CJK"}
    return {
        "body": ParagraphStyle(
            "Body", parent=styles["BodyText"], fontSize=9.8, leading=16.1,
            alignment=TA_JUSTIFY, spaceAfter=7.5, **common,
        ),
        "quote": ParagraphStyle(
            "Quote", parent=styles["BodyText"], fontSize=9.1, leading=15,
            alignment=TA_LEFT, textColor=colors.HexColor("#607580"), leftIndent=8,
            borderColor=colors.HexColor("#1a5276"), borderWidth=1.3, borderPadding=6,
            spaceAfter=9, backColor=colors.HexColor("#f4f8fa"), **common,
        ),
        "h2": ParagraphStyle(
            "H2", parent=styles["Heading2"], fontSize=16.5, leading=22,
            textColor=colors.HexColor("#1a5276"), spaceBefore=17, spaceAfter=9,
            keepWithNext=True, **common,
        ),
        "h3": ParagraphStyle(
            "H3", parent=styles["Heading3"], fontSize=12.4, leading=18,
            textColor=colors.HexColor("#1e8449"), spaceBefore=12, spaceAfter=7,
            keepWithNext=True, **common,
        ),
        "h4": ParagraphStyle(
            "H4", parent=styles["Heading4"], fontSize=10.8, leading=16,
            textColor=colors.HexColor("#2e86c1"), spaceBefore=10, spaceAfter=5,
            keepWithNext=True, **common,
        ),
        "list": ParagraphStyle(
            "List", parent=styles["BodyText"], fontSize=9.7, leading=15.5,
            alignment=TA_JUSTIFY, leftIndent=15, firstLineIndent=-11, spaceAfter=4.5,
            **common,
        ),
        "table": ParagraphStyle(
            "Table", parent=styles["BodyText"], fontSize=6.6, leading=9.2,
            alignment=TA_LEFT, **common,
        ),
        "nav": ParagraphStyle(
            "Nav", parent=styles["BodyText"], fontSize=10.2, leading=17,
            textColor=colors.HexColor("#355263"), leftIndent=12, spaceAfter=2, **common,
        ),
    }


def build_story(lines: list[str], styles: dict[str, ParagraphStyle], usable_width: float) -> list:
    story = []
    headings = [line[3:].strip() for line in lines if line.startswith("## ")]
    story.append(Paragraph("阅读导航", styles["h2"]))
    for number, heading in enumerate(headings, 1):
        story.append(Paragraph(f"{number:02d}　{inline(heading)}", styles["nav"]))
    story.append(PageBreak())

    index = 0
    paragraph: list[str] = []

    def flush_paragraph() -> None:
        if paragraph:
            story.append(Paragraph(inline(" ".join(paragraph)), styles["body"]))
            paragraph.clear()

    while index < len(lines):
        line = lines[index].rstrip()
        if not line.strip():
            flush_paragraph()
            index += 1
            continue
        if line.startswith("# "):
            flush_paragraph()
            index += 1
            continue
        if line.startswith("## "):
            flush_paragraph()
            story.append(Paragraph(inline(line[3:]), styles["h2"]))
            index += 1
            continue
        if line.startswith("### "):
            flush_paragraph()
            story.append(Paragraph(inline(line[4:]), styles["h3"]))
            index += 1
            continue
        if line.startswith("#### "):
            flush_paragraph()
            story.append(Paragraph(inline(line[5:]), styles["h4"]))
            index += 1
            continue
        if line.startswith("> "):
            flush_paragraph()
            quote = [line[2:].strip()]
            index += 1
            while index < len(lines) and lines[index].startswith("> "):
                quote.append(lines[index][2:].strip())
                index += 1
            story.append(Paragraph("<br/>".join(inline(part) for part in quote), styles["quote"]))
            continue
        if line.startswith("|"):
            flush_paragraph()
            table_lines = []
            while index < len(lines) and lines[index].startswith("|"):
                table_lines.append(lines[index])
                index += 1
            story.append(parse_table(table_lines, styles["table"], usable_width))
            story.append(Spacer(1, 7))
            continue
        if re.match(r"^(?:[-*]|\d+\.)\s+", line):
            flush_paragraph()
            marker, item = re.match(r"^((?:[-*]|\d+\.))\s+(.*)$", line).groups()
            bullet = "•" if marker in {"-", "*"} else marker
            story.append(Paragraph(f"{bullet}　{inline(item)}", styles["list"]))
            index += 1
            continue
        paragraph.append(line.strip())
        index += 1

    flush_paragraph()
    return story


def main() -> None:
    pdfmetrics.registerFont(TTFont(FONT, FONT_FILE, subfontIndex=0))
    lines = INPUT.read_text(encoding="utf-8").splitlines()
    styles = make_styles()
    frame = Frame(LEFT, BOTTOM, PAGE_WIDTH - LEFT - RIGHT, PAGE_HEIGHT - TOP - BOTTOM, id="main")
    document = BaseDocTemplate(
        str(OUTPUT), pagesize=A4, leftMargin=LEFT, rightMargin=RIGHT,
        topMargin=TOP, bottomMargin=BOTTOM,
    )
    document.addPageTemplates([__import__("reportlab.platypus", fromlist=["PageTemplate"]).PageTemplate(id="report", frames=[frame], onPage=on_page)])

    cover_title = "山西秦云企业管理有限公司"
    cover_subtitle = "横纵分析法深度研究报告"
    cover = [
        Spacer(1, 70 * mm),
        Paragraph(f'<para alignment="center"><font name="{FONT}" size="26" color="#1a5276"><b>{cover_title}</b></font></para>', styles["body"]),
        Spacer(1, 7 * mm),
        Paragraph(f'<para alignment="center"><font name="{FONT}" size="14" color="#70838d">{cover_subtitle}</font></para>', styles["body"]),
        Spacer(1, 10 * mm),
        Paragraph(f'<para alignment="center"><font name="{FONT}" size="10.5" color="#70838d">研究截止日：2026-08-09　|　主体、资产与交付能力证据边界复核</font></para>', styles["body"]),
        Spacer(1, 10 * mm),
        Paragraph(f'<para alignment="center"><font name="{FONT}" size="9.5" color="#1a5276">面向人形机器人公司的采购、合作、投资与并购决策</font></para>', styles["body"]),
        Spacer(1, 13 * mm),
        Paragraph(f'<para alignment="center"><font name="{FONT}" size="8.5" color="#70838d">研究方法：横纵分析法　|　研究材料：3 份可追溯原始资料</font></para>', styles["body"]),
        PageBreak(),
    ]
    document.build(cover + build_story(lines, styles, frame._width))
    print(OUTPUT)


if __name__ == "__main__":
    main()
