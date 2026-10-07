Public key from private
```sh
openssl rsa -in private.pem -pubout -out public.pem
```
Get modulus
``` sh
openssl rsa -in private.pem -modulus -noout > modulus.txt
```
Get sign from modulus
```sh
openssl dgst -sha256 -sign private.pem modulus.txt | base64 --wrap=0 > sign.txt
```
