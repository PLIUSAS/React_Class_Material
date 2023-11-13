## store - globali state talpykla

## slice - dalis to state atsakinga už konkrečia dalį pvz user state arba posts

## action - su action pagalba pasakom kokius pakeitimus norime padaryti savo state, action turi 2 properties type ir payload

## Reducers - reducer priima action ir pagal tai atlieka kazkoki veiksma ant pacio state. Globalus state yra immutable(negalima tiesiogiai keisti) Kai darom pakeitimus redux padaro kopija, atnaujima kpij1 ir uzdeda ją kaip originalą.

## const x = { labas: 123}

## tiesioginis pakeitimas x.labas = 'adsasdas'
