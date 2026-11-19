# 三田市のホワイトニング料金・照射時間・通い放題：公開情報調査

版：1.0.0 / 確認日：2026-11-19（日本時間）

公開ページ：https://dentsblanchessanda.github.io/sanda-whitening-data/provider-conditions/

編集・公開：ダンブランシュサンダ（dents Blanches SANDA）三田店（比較対象店舗）
店舗TOP：https://beauty.hotpepper.jp/kr/slnH000750426/
公式：https://dents-blanches-sanda.com/

## 対象

対象は兵庫県三田市内に所在地があり、公式サイトまたは店舗自身の掲載する予約サイトでホワイトニングの具体的な料金と照射時間を確認できた4サロン。歯科医院・ジム併設型は対象外です。市内全店の悉皆調査ではありません。一般の初回・再来都度払い・月額プランを中心に収録し、回数券と一部の学生向け月額を補足しました。ペア割・紹介割・誕生日特典・全学生向け都度メニュー・任意追加オプションを含む全クーポンの網羅ではありません。

## 抽出・比較ルール

- 公開ページを2026年11月19日に確認。店頭調査・覆面調査・各店への問い合わせは行っていません。
- 価格は掲載媒体と利用条件を行ごとに保持。初回限定・再来・月額・回数券を分離し、無料相談や契約者の予約枠0円は施術料金0円として収録しません。
- LED照射分数とカウンセリング・準備・仕上げを含む所要時間を区別。照射回数と来店回数も別の列に記録しました。
- 未確認は、調査した公開情報から確定できない項目です。「なし」「提供していない」という判定ではありません。空の数値欄も0円・0分を意味しません。
- 同一ページ内の価格差・条件差は統一せず注記と別行で保持。今回の表は店舗の品質・効果・おすすめ順位を採点するものではありません。
- 編集・公開者は比較対象のダンブランシュサンダです。独立した第三者評価を装わず、他店にも自店と同じ出典・確認日の基準を適用しています。
- 照射時間はメニューの仕様値です。機器・使用物・ケア工程が異なるため、分数から効果の大小や同等性は計算していません。

## ファイル

- plans.csv：38件のメニュー記録。UTF-8 BOM付き。
- providers.csv：4サロンの所在地、公開掲載先、ケア・備品・設備。
- sources.csv：14件の出典と確認内容。
- screening.csv：収録外候補3件の確認記録。
- data.json：上記4表と同一内容。
- dataset.jsonld：Dataset構造化データ。
- index.html / style.css：読者向けの比較ページ。

## plans.csv列定義

plan_id: メニュー記録ID。provider_id: 店舗ID（DBS/WS/LUANGE/LUNA）。plan_type: initial=初回、repeat=再来、per_visit=公式都度、monthly=月額、ticket=回数券。plan_name: 原文を要約したメニュー名。price_jpy: 掲載価格（円・税込）。price_basis: 1回来店/1か月/券全体。led_minutes_per_visit: 1回来店の合計LED照射分数。led_split: 照射内訳（分×回）。included_visits: 券で利用できる来店回数。validity: 有効期間。visit_limit: 回数上限。min_commitment_months: 明示された最低利用月数（1は1か月のみ利用可）。cancellation_fee_jpy: 明示された途中解約金。eligibility: 利用対象・条件。included_care: 含まれるケア。notes: 原表記の差・条件等。conflict_group: 同種メニューの表示差を追跡するID。source_ids: sources.csvへの参照（;区切り）。source_url: 出典URL（;区切り）。checked_date: 確認日（日本時間）。空欄は未確認/非該当であり0ではない。

## providers.csv / sources.csv / screening.csv

providers: name=店舗名、address=所在地、official_url=公式サイト、hpb_top_url=HPB個店TOP、rooms=個室条件、washbasin=洗面設備、included_care=工程、consumables=備品運用、extra_fees=追加費用。source_idsとchecked_dateはメニュー表と共通。

sources: source_id=参照ID、title=資料名、url=出典URL、scope=確認内容、checked_date=確認日。

screening: candidate=候補名、status=採否、reason=理由、source_id=出典参照、checked_date=確認日。

## 価格表示差の記録

ホワイトニングショップ三田店の40分都度払いは、クーポン価格欄7980円、メニュー価格欄6980円（名称は7980円）の併存を確認。W03/W04を同じconflict_groupで保持し、正しい適用価格の裁定はしていません。再来キャンペーンW05も対象条件の表記差を残しています。

ルナ クレッシェンテの回数プランの「1回30分」はLED照射時間との対応を特定できないため、led_minutes_per_visitを空欄にしました。

## 再利用

独自の抽出表・データ・解説をCC BY 4.0で提供。出典元の写真・文章・商標は各権利者の権利に従います。引用例：ダンブランシュサンダ（2026）「三田市のホワイトニング料金・照射時間・通い放題：公開情報調査」v1.0.0, https://dentsblanchessanda.github.io/sanda-whitening-data/provider-conditions/（確認日2026年11月19日）。

## 更新履歴

- 1.0.0（2026-11-19）：4サロン・38メニュー記録・14出典・収録外候補3件を公開。
