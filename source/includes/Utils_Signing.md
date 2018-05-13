# Utils.Signing 
## Constructor (ICurl)
 
Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_Signing">Signing</a> class



### Syntax


```cs
public Signing(
	ICurl curl
)
```


#### Parameters
&nbsp;<dl><dt>curl</dt><dd>Type: <a href="T_Iota_Lib_CSharp_Api_Utils_ICurl">Iota.Lib.CSharp.Api.Utils.ICurl</a><br />\[Missing <param name="curl"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.#ctor(Iota.Lib.CSharp.Api.Utils.ICurl)"\]</dd></dl>


## Constructor 

Initializes a new instance of the <a href="T_Iota_Lib_CSharp_Api_Utils_Signing">Signing</a> class

### Syntax


```cs
public Signing()
```

## Address Method 
\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Address(System.Int32[])"\]

### Syntax

```cs
public int[] Address(
	int[] digests
)
```

#### Parameters
&nbsp;<dl><dt>digests</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="digests"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Address(System.Int32[])"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]


## Digest Method 
 

\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Digest(System.Int32[],System.Int32[])"\]



### Syntax


```cs
public int[] Digest(
	int[] normalizedBundleFragment,
	int[] signatureFragment
)
```


#### Parameters
&nbsp;<dl><dt>normalizedBundleFragment</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="normalizedBundleFragment"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Digest(System.Int32[],System.Int32[])"\]</dd><dt>signatureFragment</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="signatureFragment"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Digest(System.Int32[],System.Int32[])"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]


## Digests Method 
 

\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Digests(System.Int32[])"\]



### Syntax


```cs
public int[] Digests(
	int[] key
)
```


#### Parameters
&nbsp;<dl><dt>key</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="key"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Digests(System.Int32[])"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]


## Key Method 
 

\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Key(System.Int32[],System.Int32,System.Int32)"\]



### Syntax


```cs
public int[] Key(
	int[] seed,
	int index,
	int length
)
```


#### Parameters
&nbsp;<dl><dt>seed</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="seed"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Key(System.Int32[],System.Int32,System.Int32)"\]</dd><dt>index</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />\[Missing <param name="index"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Key(System.Int32[],System.Int32,System.Int32)"\]</dd><dt>length</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a><br />\[Missing <param name="length"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.Key(System.Int32[],System.Int32,System.Int32)"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]


## SignatureFragment Method 
 

\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.SignatureFragment(System.Int32[],System.Int32[])"\]



### Syntax


```cs
public int[] SignatureFragment(
	int[] normalizedBundleFragment,
	int[] keyFragment
)
```


#### Parameters
&nbsp;<dl><dt>normalizedBundleFragment</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="normalizedBundleFragment"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.SignatureFragment(System.Int32[],System.Int32[])"\]</dd><dt>keyFragment</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">System.Int32</a>[]<br />\[Missing <param name="keyFragment"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.SignatureFragment(System.Int32[],System.Int32[])"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/td2s409d" target="_blank">Int32</a>[]


## ValidateSignatures Method 
 

\[Missing <summary> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.ValidateSignatures(System.String,System.String[],System.String)"\]



### Syntax


```cs
public bool ValidateSignatures(
	string expectedAddress,
	string[] signatureFragments,
	string bundleHash
)
```


#### Parameters
&nbsp;<dl><dt>expectedAddress</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />\[Missing <param name="expectedAddress"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.ValidateSignatures(System.String,System.String[],System.String)"\]</dd><dt>signatureFragments</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a>[]<br />\[Missing <param name="signatureFragments"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.ValidateSignatures(System.String,System.String[],System.String)"\]</dd><dt>bundleHash</dt><dd>Type: <a href="http://msdn2.microsoft.com/en-us/library/s1wwdcbf" target="_blank">System.String</a><br />\[Missing <param name="bundleHash"/> documentation for "M:Iota.Lib.CSharp.Api.Utils.Signing.ValidateSignatures(System.String,System.String[],System.String)"\]</dd></dl>

#### Return Value
Type: <a href="http://msdn2.microsoft.com/en-us/library/a28wyd50" target="_blank">Boolean</a>


