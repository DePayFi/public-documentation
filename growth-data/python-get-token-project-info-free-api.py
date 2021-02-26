# Get additional crypto token info / links / social via coingecko API for a token address
# created 20210221 by Alex Paul, DePay
# visit our website 👉 https://depay.fi/
# join our telegram group 👉 https://t.me/DePayFi

import requests
import json
import pprint

def get_token_info_for_address(contract_address):
  request_url = "https://api.coingecko.com/api/v3/coins/ethereum/contract/" + str(contract_address)
  response = requests.session().get(request_url)
  json_content = response.json()

  description = json_content['description']['en']

  tg_names = json_content['links']['telegram_channel_identifier']
  telegram_links = "https://t.me/" + tg_names if type(tg_names) == str else ", ".join(filter(None, ("https://t.me/" + i for i in tg_names if len(i) > 0)))

  twitter_names = json_content['links']['twitter_screen_name']
  twitter_links = "https://twitter.com/" + twitter_names if type(twitter_names) == str else ", ".join(filter(None, ("https://twitter.com/" + i for i in twitter_names if len(i) > 0)))
  homepages = ", ".join(filter(None, json_content['links']['homepage']))
  github = ", ".join(filter(None, json_content['links']['repos_url']['github']))
  chats = ", ".join(filter(None, json_content['links']['chat_url']))
  subreddit_url = ", ".join(filter(None, [json_content['links']['subreddit_url']]))
  announcement_urls = ", ".join(filter(None, json_content['links']['announcement_url']))

  #print("description: ",description)
  #print("telegram_links: ",telegram_links)
  #print("twitter_links: ",twitter_links)
  #print("subreddit_url: ",subreddit_url)
  #print("homepages: ",homepages)
  #print("github: ",github)
  #print("chats: ",chats)
  #print("announcement_urls: ",announcement_urls)
  return [description,tg_names,telegram_links,twitter_names,twitter_links,homepages,github,chats,subreddit_url,announcement_urls]

get_token_info_for_address("0xa0bed124a09ac2bd941b10349d8d224fe3c955eb")
