# JOUT: JSON (Pretty) output

JOUT is a simple CLI that prints a pretty version of a piped JSON.

## example
```sh
curl http://wordreference.fabiangutierrez.co/v1/translate/es/en/caballo | jout
```
outputs:

![jout in action](https://lh3.googleusercontent.com/qhJiy9brRDcCZrxdBEVrT_OEVKIAd58TK7_-AHd4W00UWXDnuzMaEvVopJpQQGUJEf88c0AJ4WEoGmtQU1MTh3jNfLrz1p1acezQ51kogRtyxxmKZxIAl10kltBZcWa5z_qaTb98oTMNIXDJu4cGF7tAmsMsrRrJThlPAqP1HG6CAnDcZjpICQmaO39-vPZgoKNM2c8T29LXS3x1q-wzeJv7DytEQSJyDtFCjiN0Jha56ER_QftLJwrmURqhsKCJfU_7Kakc44lqY3_nL8CFaWkYbbWR_UIMFP_12ur2ZcUv2AekqIVM-FFdfgqfRxF8KyHiDxPK6osbMT9hRaXIU7tZQ2BgzNvyan0eo2dbWn6OWgUEdyD-yYKm9KlAADFmCEbSobU_NjLszQ-nMbgY17wKOLDA2lfM4bBhLKkgcrOhw6y05hFntuh2k0EIrOMNoVbmxK7sWDNF1ESY13emK_pM9iJUVGgXL_f07C_7niwxfVf9EMBsJcNSqG2vygXZLSqDn_vU8QMrzO8iEnJZIcQr6aKUVhHwUn9Y4LCTvoKi2AwFIXwrIswBnZEzuaEHbbmd50NSsQDULu7fhEUhq5gaHDzgf7raV95l7ibJp6A_96HSX8xHHw=w1249-h648-no)

## usage
```sh
something-that-outputs-a-json | jout # That's all
```
