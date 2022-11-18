"""
Conversion Constants
"""
# Hexadecimal
HexChar = r"[0-9A-Fa-f]"

# IPv4 Address
IPv4_Octet = r"(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])"
IPv4_Addr = fr"({IPv4_Octet}\.){{3}}{IPv4_Octet}"
IPv4_Mask = r"(3[0-2]|[0-2]?[0-9])"  # 1-32
IPv4_Net = fr"{IPv4_Addr}(\/{IPv4_Mask})?"

# IPv6 Address
IPv6_Octet = fr"{HexChar}{{1,4}}"
IPv6_Addr = (
    fr"({IPv6_Octet}:){{7,7}}{IPv6_Octet}|"             # 1:2:3:4:5:6:7:8
    fr"({IPv6_Octet}:){{1,7}}:|"                        # 1::                                 1:2:3:4:5:6:7::
    fr"({IPv6_Octet}:){{1,6}}:{IPv6_Octet}|"            # 1::8               1:2:3:4:5:6::8   1:2:3:4:5:6::8
    fr"({IPv6_Octet}:){{1,5}}(:{IPv6_Octet}){{1,2}}|"   # 1::7:8             1:2:3:4:5::7:8   1:2:3:4:5::8
    fr"({IPv6_Octet}:){{1,4}}(:{IPv6_Octet}){{1,3}}|"   # 1::6:7:8           1:2:3:4::6:7:8   1:2:3:4::8
    fr"({IPv6_Octet}:){{1,3}}(:{IPv6_Octet}){{1,4}}|"   # 1::5:6:7:8         1:2:3::5:6:7:8   1:2:3::8
    fr"({IPv6_Octet}:){{1,2}}(:{IPv6_Octet}){{1,5}}|"   # 1::4:5:6:7:8       1:2::4:5:6:7:8   1:2::8
    fr"{IPv6_Octet}:((:{IPv6_Octet}){{1,6}})|"          # 1::3:4:5:6:7:8     1::3:4:5:6:7:8   1::8
    fr":((:{IPv6_Octet}){{1,7}}|:)|"                    # ::2:3:4:5:6:7:8    ::2:3:4:5:6:7:8  ::8       ::
    fr"fe80:(:{IPv6_Octet}){{0,4}}%[0-9a-zA-Z]{{1,}}|"  # fe80::7:8%eth0     fe80::7:8%1  (link-local IPv6 addresses with zone index)
    fr"::(ffff(:0{{1,4}}){{0,1}}:){{0,1}}{IPv4_Addr}|"  # ::255.255.255.255  ::ffff:255.255.255.255  ::ffff:0:255.255.255.255 (IPv4-mapped IPv6 addresses and IPv4-translated addresses)
    fr"({IPv6_Octet}:){{1,4}}:{IPv4_Addr}"              # 2001:db8:3:4::192.0.2.33  64:ff9b::192.0.2.33 (IPv4-Embedded IPv6 Address)
)
IPv6_Mask = r"(12[0-8]|1[01][0-9]|[0-9]?[0-9])"  # 1-128
IPv6_Net = fr"{IPv6_Addr}(\/{IPv6_Mask})?"

# Escape Characters
# HTML: https://www.html.am/reference/html-special-characters.cfm
HTML_Escapes = {
    # HTML Reserved Characters
    '"': "&quot;",  # quotation mark
    "'": "&apos;",  # apostrophe
    "&": "&amp;",  # ampersand
    "<": "&lt;",  # less-than
    ">": "&gt;",  # greater-than
    # General HTML Symbols
    "Œ": "&OElig;",  # capital ligature OE
    "œ": "&oelig;",  # small ligature oe
    "Š": "&Scaron;",  # capital S with caron
    "š": "&scaron;",  # small S with caron
    "Ÿ": "&Yuml;",  # capital Y with diaeres
    "ƒ": "&fnof;",  # f with hook
    "ˆ": "&circ;",  # modifier letter circumflex accent
    "˜": "&tilde;",  # small tilde
    "\u2002": "&ensp;",  # en space
    "\u2003": "&emsp;",  # em space
    "\u2009": "&thinsp;",  # thin space
    "\u200C": "&zwnj;",  # zero width non-joiner
    "\u200D": "&zwj;",  # zero width joiner
    "\u200E": "&lrm;",  # left-to-right mark
    "\u200F": "&rlm;",  # right-to-left mark
    "–": "&ndash;",  # en dash
    "—": "&mdash;",  # em dash
    "‘": "&lsquo;",  # left single quotation mark
    "’": "&rsquo;",  # right single quotation mark
    "‚": "&sbquo;",  # single low-9 quotation mark
    "“": "&ldquo;",  # left double quotation mark
    "”": "&rdquo;",  # right double quotation mark
    "„": "&bdquo;",  # double low-9 quotation mark
    "†": "&dagger;",  # dagger
    "‡": "&Dagger;",  # double dagger
    "•": "&bull;",  # bullet
    "…": "&hellip;",  # horizontal ellipsis
    "‰": "&permil;",  # per mille
    "′": "&prime;",  # minutes
    "″": "&Prime;",  # seconds
    "‹": "&lsaquo;",  # single left angle quotation
    "›": "&rsaquo;",  # single right angle quotation
    "‾": "&oline;",  # overline
    "€": "&euro;",  # euro
    "™": "&trade;",  # trademark
    "←": "&larr;",  # left arrow
    "↑": "&uarr;",  # up arrow
    "→": "&rarr;",  # right arrow
    "↓": "&darr;",  # down arrow
    "↔": "&harr;",  # left right arrow
    "↵": "&crarr;",  # carriage return arrow
    "⌈": "&lceil;",  # left ceiling
    "⌉": "&rceil;",  # right ceiling
    "⌊": "&lfloor;",  # left floor
    "⌋": "&rfloor;",  # right floor
    "◊": "&loz;",  # lozenge
    "♠": "&spades;",  # spade
    "♣": "&clubs;",  # club
    "♥": "&hearts;",  # heart
    "♦": "&diams;",  # diamond
    # Mathematical Symbols
    "∀": "&forall;",  # for all
    "∂": "&part;",  # part
    "∃": "&exist;",  # exists
    "∅": "&empty;",  # empty
    "∇": "&nabla;",  # nabla
    "∈": "&isin;",  # isin
    "∉": "&notin;",  # notin
    "∋": "&ni;",  # ni
    "∏": "&prod;",  # prod
    "∑": "&sum;",  # sum
    "−": "&minus;",  # minus
    "∗": "&lowast;",  # lowast
    "√": "&radic;",  # square root
    "∝": "&prop;",  # proportional to
    "∞": "&infin;",  # infinity
    "∠": "&ang;",  # angle
    "∧": "&and;",  # and
    "∨": "&or;",  # or
    "∩": "&cap;",  # cap
    "∪": "&cup;",  # cup
    "∫": "&int;",  # integral
    "∴": "&there4;",  # therefore
    "∼": "&sim;",  # similar to
    "≅": "&cong;",  # congruent to
    "≈": "&asymp;",  # almost equal
    "≠": "&ne;",  # not equal
    "≡": "&equiv;",  # equivalent
    "≤": "&le;",  # less or equal
    "≥": "&ge;",  # greater or equal
    "⊂": "&sub;",  # subset of
    "⊃": "&sup;",  # superset of
    "⊄": "&nsub;",  # not subset of
    "⊆": "&sube;",  # subset or equal
    "⊇": "&supe;",  # superset or equal
    "⊕": "&oplus;",  # circled plus
    "⊗": "&otimes;",  # circled times
    "⊥": "&perp;",  # perpendicular
    "⋅": "&sdot;",  # dot operator
    # Greek Characters
    "Α": "&Alpha;",  # Alpha
    "Β": "&Beta;",  # Beta
    "Γ": "&Gamma;",  # Gamma
    "Δ": "&Delta;",  # Delta
    "Ε": "&Epsilon;",  # Epsilon
    "Ζ": "&Zeta;",  # Zeta
    "Η": "&Eta;",  # Eta
    "Θ": "&Theta;",  # Theta
    "Ι": "&Iota;",  # Iota
    "Κ": "&Kappa;",  # Kappa
    "Λ": "&Lambda;",  # Lambda
    "Μ": "&Mu;",  # Mu
    "Ν": "&Nu;",  # Nu
    "Ξ": "&Xi;",  # Xi
    "Ο": "&Omicron;",  # Omicron
    "Π": "&Pi;",  # Pi
    "Ρ": "&Rho;",  # Rho
    # TBD? 	undefined	 	Sigmaf
    "Σ": "&Sigma;",  # Sigma
    "Τ": "&Tau;",  # Tau
    "Υ": "&Upsilon;",  # Upsilon
    "Φ": "&Phi;",  # Phi
    "Χ": "&Chi;",  # Chi
    "Ψ": "&Psi;",  # Psi
    "Ω": "&Omega;",  # Omega
    "α": "&alpha;",  # alpha
    "β": "&beta;",  # beta
    "γ": "&gamma;",  # gamma
    "δ": "&delta;",  # delta
    "ε": "&epsilon;",  # epsilon
    "ζ": "&zeta;",  # zeta
    "η": "&eta;",  # eta
    "θ": "&theta;",  # theta
    "ι": "&iota;",  # iota
    "κ": "&kappa;",  # kappa
    "λ": "&lambda;",  # lambda
    "μ": "&mu;",  # mu
    "ν": "&nu;",  # nu
    "ξ": "&xi;",  # xi
    "ο": "&omicron;",  # omicron
    "π": "&pi;",  # pi
    "ρ": "&rho;",  # rho
    "ς": "&sigmaf;",  # sigmaf
    "σ": "&sigma;",  # sigma
    "τ": "&tau;",  # tau
    "υ": "&upsilon;",  # upsilon
    "φ": "&phi;",  # phi
    "χ": "&chi;",  # chi
    "ψ": "&psi;",  # psi
    "ω": "&omega;",  # omega
    "ϑ": "&thetasym;",  # theta symbol
    "ϒ": "&upsih;",  # upsilon symbol
    "ϖ": "&piv;",  # pi symbol
    # ISO 8859-1 Characters
    "À": "&Agrave;",  # capital a, grave accent
    "Á": "&Aacute;",  # capital a, acute accent
    "Â": "&Acirc;",  # capital a, circumflex accent
    "Ã": "&Atilde;",  # capital a, tilde
    "Ä": "&Auml;",  # capital a, umlaut mark
    "Å": "&Aring;",  # capital a, ring
    "Æ": "&AElig;",  # capital ae
    "Ç": "&Ccedil;",  # capital c, cedilla
    "È": "&Egrave;",  # capital e, grave accent
    "É": "&Eacute;",  # capital e, acute accent
    "Ê": "&Ecirc;",  # capital e, circumflex accent
    "Ë": "&Euml;",  # capital e, umlaut mark
    "Ì": "&Igrave;",  # capital i, grave accent
    "Í": "&Iacute;",  # capital i, acute accent
    "Î": "&Icirc;",  # capital i, circumflex accent
    "Ï": "&Iuml;",  # capital i, umlaut mark
    "Ð": "&ETH;",  # capital eth, Icelandic
    "Ñ": "&Ntilde;",  # capital n, tilde
    "Ò": "&Ograve;",  # capital o, grave accent
    "Ó": "&Oacute;",  # capital o, acute accent
    "Ô": "&Ocirc;",  # capital o, circumflex accent
    "Õ": "&Otilde;",  # capital o, tilde
    "Ö": "&Ouml;",  # capital o, umlaut mark
    "Ø": "&Oslash;",  # capital o, slash
    "Ù": "&Ugrave;",  # capital u, grave accent
    "Ú": "&Uacute;",  # capital u, acute accent
    "Û": "&Ucirc;",  # capital u, circumflex accent
    "Ü": "&Uuml;",  # capital u, umlaut mark
    "Ý": "&Yacute;",  # capital y, acute accent
    "Þ": "&THORN;",  # capital THORN, Icelandic
    "ß": "&szlig;",  # small sharp s, German
    "à": "&agrave;",  # small a, grave accent
    "á": "&aacute;",  # small a, acute accent
    "â": "&acirc;",  # small a, circumflex accent
    "ã": "&atilde;",  # small a, tilde
    "ä": "&auml;",  # small a, umlaut mark
    "å": "&aring;",  # small a, ring
    "æ": "&aelig;",  # small ae
    "ç": "&ccedil;",  # small c, cedilla
    "è": "&egrave;",  # small e, grave accent
    "é": "&eacute;",  # small e, acute accent
    "ê": "&ecirc;",  # small e, circumflex accent
    "ë": "&euml;",  # small e, umlaut mark
    "ì": "&igrave;",  # small i, grave accent
    "í": "&iacute;",  # small i, acute accent
    "î": "&icirc;",  # small i, circumflex accent
    "ï": "&iuml;",  # small i, umlaut mark
    "ð": "&eth;",  # small eth, Icelandic
    "ñ": "&ntilde;",  # small n, tilde
    "ò": "&ograve;",  # small o, grave accent
    "ó": "&oacute;",  # small o, acute accent
    "ô": "&ocirc;",  # small o, circumflex accent
    "õ": "&otilde;",  # small o, tilde
    "ö": "&ouml;",  # small o, umlaut mark
    "ø": "&oslash;",  # small o, slash
    "ù": "&ugrave;",  # small u, grave accent
    "ú": "&uacute;",  # small u, acute accent
    "û": "&ucirc;",  # small u, circumflex accent
    "ü": "&uuml;",  # small u, umlaut mark
    "ý": "&yacute;",  # small y, acute accent
    "þ": "&thorn;",  # small thorn, Icelandic
    "ÿ": "&yuml;",  # small y, umlaut mark
    # ISO 8859-1 Symbols
    "¡": "&iexcl;",  # inverted exclamation mark
    "¢": "&cent;",  # cent
    "£": "&pound;",  # pound
    "¤": "&curren;",  # currency
    "¥": "&yen;",  # yen
    "¦": "&brvbar;",  # broken vertical bar
    "§": "&sect;",  # section
    "¨": "&uml;",  # spacing diaeresis
    "©": "&copy;",  # copyright
    "ª": "&ordf;",  # feminine ordinal indicator
    "«": "&laquo;",  # angle quotation mark (left)
    "¬": "&not;",  # negation
    "­": "&shy;",  # soft hyphen
    "®": "&reg;",  # registered trademark
    "¯": "&macr;",  # spacing macron
    "°": "&deg;",  # degree
    "±": "&plusmn;",  # plus-or-minus
    "²": "&sup2;",  # superscript 2
    "³": "&sup3;",  # superscript 3
    "´": "&acute;",  # spacing acute
    "µ": "&micro;",  # micro
    "¶": "&para;",  # paragraph
    "·": "&middot;",  # middle dot
    "¸": "&cedil;",  # spacing cedilla
    "¹": "&sup1;",  # superscript 1
    "º": "&ordm;",  # masculine ordinal indicator
    "»": "&raquo;",  # angle quotation mark (right)
    "¼": "&frac14;",  # fraction 1/4
    "½": "&frac12;",  # fraction 1/2
    "¾": "&frac34;",  # fraction 3/4
    "¿": "&iquest;",  # inverted question mark
    "×": "&times;",  # multiplication
    "÷": "&divide;"  # division
}
