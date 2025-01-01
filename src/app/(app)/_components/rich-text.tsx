import { RichText as RichTextLexical } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const RichText = ({ data }: { data: SerializedEditorState }) => {
  return <RichTextLexical data={data} />
}
