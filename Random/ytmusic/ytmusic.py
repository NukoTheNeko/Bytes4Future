from ytmusicapi import YTMusic
import heapq

ytmusic = YTMusic("oauth.json", "100196038931132688821")

search_results = ytmusic.get_history()
dict = {}
for result in search_results:
	title = result["title"]
	if not title in dict:
		dict[title]	= 0
	dict[title] = dict[title] + 1
heap = heapq.nlargest(5, dict, key=dict.get)
for word in heap:
	print(word)
	print(dict[word])