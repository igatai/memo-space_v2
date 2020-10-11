# json.array! @memos.each |memo| do
#   json.title memo.title
#   json.text memo.text
#   json.image memo.image.url
#   json.updated_at memo.updated_at.strftime("%Y/%m/%d")
# end