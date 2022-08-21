import requests

url = 'https://thentic.tech/api/nfts/contract'
headers = {'Content-Type': 'application/json'}
data = {'key': '3ape5peE6EAbPXq60CmgzgcBnVkn5lIY',
        'chain_id': '3',
        'name': 'MiniThentic NFT', 
        'short_name': 'MTN'}

#creates NFT contract on BNB testnet
r = requests.post(url, json=data, headers=headers)
print(r.text)