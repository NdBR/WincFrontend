present?(var:record.agreement.debiteuropdrachtnummer) 
? var:record.agreement.debiteuropdrachtnummer 
:var:record.debiteur.inkoop_ordernummer

present?(var:record.agreement.debiteuropdrachtnummer && var:record.debiteur.inkoop_ordernummer) 
? var:record.debiteur.inkoop_ordernummer + '/' + var:record.agreement.debiteuropdrachtnummer 
: present?(var:record.agreement.debiteuropdrachtnummer)
? var:record.agreement.debiteuropdrachtnummer 
: present?(var:record.agreement.debiteuropdrachtnummer)
? var:record.agreement.debiteuropdrachtnummer
: ''

present?(var:record.agreement.debiteuropdrachtnummer) & present?(var:record.debiteur.inkoop_ordernummer)
? var:record.debiteur.inkoop_ordernummer + '/' + var:record.agreement.debiteuropdrachtnummer 
: var:record.agreement.debiteuropdrachtnummer 
: var:record.debiteur.inkoop_ordernummer



omschrijving extern
present?(var:record.agreement) ? var:polisnummer 
+ " opd.dat. " + strftime(var:record.agreement.created_at, "%d-%m-%Y") 
+ ", afs.dat. " + strftime(var:record.agreement.date, "%d-%m-%Y") + " " 
+ var:product_omschrijving 
: "HF: " + var:product_omschrijving 
+ " Periode: " + var:factuuromschrijving

