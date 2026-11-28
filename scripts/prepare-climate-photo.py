"""Fetch the licensed original, verify checksum, resize for static deployment."""
from pathlib import Path
from urllib.request import Request, urlopen
import hashlib, io
from PIL import Image
target=Path("product-climate-resilience/assets/a400m-air-to-air.jpg")
url="https://upload.wikimedia.org/wikipedia/commons/1/17/Air-to-air_with_a_German_Air_Force_Airbus_A400M.jpg"
request=Request(url,headers={"User-Agent":"SustainabilityNavigator/1.0 (educational static website; https://github.com/AUG79-droid/sustainability-navigator)"})
with urlopen(request, timeout=45) as response:
    data=response.read()
assert hashlib.sha1(data).hexdigest()=="01c1e137e39a32a1dcfe86f85cbcc5a6b54c9cd5", "Unexpected original image"
image=Image.open(io.BytesIO(data)).convert("RGB")
image.thumbnail((1280,720), Image.Resampling.LANCZOS)
target.parent.mkdir(parents=True,exist_ok=True)
image.save(target,quality=90,optimize=True)
print("Verified climate photo:", image.size, target.stat().st_size)
