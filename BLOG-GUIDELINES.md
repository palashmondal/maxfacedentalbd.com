# Blog post rules

Directive for writing any new post in `lib/blog.ts`. Follow every rule below —
this is not optional style advice, it's the spec for a valid post.

## Content rules

1. **Bangladesh perspective.** Ground every post in the local context: local
   costs, local habits (paan, zarda, gul, cha with sugar), local misconceptions,
   Dhaka/chamber culture, monsoon/heat factors — not generic global dental
   advice. A post that could have been written for any country has failed this
   rule.
2. **Cite data/research when possible.** Prefer citing a real, checkable
   statistic or finding (WHO, a named study, a recognised dental body) over a
   vague "studies show." If no specific verifiable figure is available, use
   plainly-stated general medical consensus instead of inventing a number —
   never fabricate a statistic, study name, or percentage.
3. **Easily readable, not complex.** Short sentences. Explain medical terms in
   plain words the first time they appear (e.g. "gingivitis (early gum
   disease)"). Write for someone with no dental background — a patient in the
   waiting room, not a dental student.
4. **Point-based info when appropriate.** Use the `list` field for anything
   that is a sequence, a set of warning signs, a comparison, or steps — don't
   force it into paragraph prose. Paragraphs are for explanation and reasoning;
   lists are for scanning.
5. **One clear takeaway.** The `takeaway` field is a single memorable,
   actionable sentence — not a summary of the article. A reader who reads only
   the takeaway should still get the one thing to remember or act on.
6. **Always guide the reader to Maxface Dental Care.** Every post's
   `takeaway` must close with a natural line pointing the reader to the
   chamber — booking a check-up, an appointment, or a consultation. Never a
   generic "see a dentist" with no name attached. Match the tone already used
   in existing posts (e.g. the scaling post's Bangla takeaway ends with an
   explicit appointment call-to-action) — do this in English posts too, not
   just Bangla ones.

## Structural / schema checklist

Match the existing `BlogPost` shape in `lib/blog.ts` exactly:

- `slug` — unique, kebab-case, descriptive (check it doesn't collide with an
  existing post).
- `title`, `excerpt` — excerpt is 1–2 sentences, written to make someone click.
- `category` — reuse an existing category from `lib/blog.ts` when the topic
  fits; only introduce a new category if none of the existing ones apply.
- `date` — ISO `YYYY-MM-DD`, later than the most recent existing post date.
- `readTime` — realistic estimate matching actual content length (5–7 min is
  typical here).
- `image` / `imageAlt` — reuse an existing image under
  `public/images/blog/` that's thematically closest; only add a new image
  asset if the user supplies one. `imageAlt` describes the photo, not the
  topic.
- `intro` — 2 short paragraphs that hook the reader and state why this
  matters *in Bangladesh*.
- `sections` — 3–5 sections, each with a `heading` and either `paragraphs`,
  a `list`, or both.
- `takeaway` — see rules 5 and 6 above.
- `lang` — set to `"bn"` for Bangla posts (adds Bangla font + `lang="bn"`
  markup); omit for English.

Also add an entry to the `postTags` map (bottom of `lib/blog.ts`) — 3 short
display tags per post, matching the style of existing entries.

After writing a post, run `npm run build` to confirm it compiles and the new
`/blog/<slug>/` route generates — the sitemap picks it up automatically, no
manual sitemap edits needed.
