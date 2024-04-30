// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Black from './components/Black/Black.css';
import Clear from './components/Clear/Clear.css';
import Dane2 from './components/Dane2.jsx';
import Nav from './components/Nav/Nav.jsx';
import Gorny from './components/Gorny/Gorny.jsx';

function App() { 
  
  return (
    <div className="App">
      {/* <h1>Title</h1> */}
      <Header></Header>
      <Nav></Nav>
      <Gorny h1gorny='REWOLUCJA TECHNOLOGICZNA NADESZŁA! UCZ SIĘ RAZEM Z NAMI. TERAZ PRZEZ 7 DNI ZA DARMO!'></Gorny>
      <Dane2 class1="flexbox2" class2="box2"class3="flexh2"class4="flexp2"class5="button2"classzdj="zdj2" but2="but2" name="ESENCJA STUDIÓW INFORMATYCZNYCH [143 godziny wykładów]" opis='Czy kiedykolwiek marzyłeś o poznaniu najistotniejszych elementów studiów informatycznych, bez konieczności wieloletniej nauki i zapisywaniu się na studia? Ta ścieżka została stworzona specjalnie dla Ciebie! Zebraliśmy w niej wszystko, co uważamy za najważniejsze i najbardziej fascynujące w studiach informatycznych - i dodaliśmy trochę więcej. Idealna dla osób, które dopiero zaczynają swoją przygodę z IT i potrzebują solidnych fundamentów, a także dla studentów inżynieryjnych, którzy chcą wzbogacić i ugruntować swoją wiedzę' link="https://static1.s123-cdn-static-a.com/uploads/5979588/800_64b8f4b1894d4.png"/>
      <Dane2 class1="flexbox" class2="box"class3="flexh"class4="flexp"class5="button"classzdj="zdj" but2="but" name="WEB DEVELOPER (TWÓRCA STRON INTERNETOWYCH) [161 godzin]" opis='Czy marzysz o tworzeniu niesamowitych stron internetowych i wejściu do fascynującego świata web developmentu? Oto ścieżka, którą stworzyliśmy specjalnie dla Ciebie! Zaczynamy od podstaw, aby stopniowo prowadzić Cię przez proces nauki, aż osiągniesz poziom, na którym będziesz mógł tworzyć nie tylko piękne, ale także interaktywne strony internetowe. Ale to jeszcze nie wszystko! Poza front-endem, zyskasz też solidne umiejętności programowania w JavaScript oraz podstawy back-endu, obejmujące sieci i bazy danych.' link="https://static1.s123-cdn-static-a.com/ready_uploads/media/4416/800_5cda477229c3d.jpg"/>
      <Dane2 class1="flexbox2" class2="box2"class3="flexh2"class4="flexp2"class5="button2"classzdj="zdj2" but2="but2" name="ANGIELSKI PRAWIE OD PODSTAW [21 godzin]" link="https://static1.s123-cdn-static-a.com/uploads/5979588/800_64b8f42b5b156_filter_64b8f4448f0ad.png" opis='Język angielski to nieodłączny element branży IT. Choć nie jest wymagany wszędzie, niewątpliwie otwiera drzwi do szerszych możliwości rozwoju i awansu zawodowego. Dlatego stworzyliśmy tę ścieżkę specjalnie dla Ciebie, który czujesz się jak wieczny początkujący w nauce angielskiego. Nasza metoda nauczania jest zarówno skuteczna, jak i interesująca, skupiając się na języku specyficznym dla branży IT. Ta ścieżka jest idealna dla osób, które chcą poprawić swoją płynność w języku angielskim, zwiększając jednocześnie swoje kompetencje w dziedzinie IT.'/>
      <Dane2 class1="flexbox" class2="box"class3="flexh"class4="flexp"class5="button"classzdj="zdj" but2="but" name="PROJECT MANAGER W IT [19 godzin]" opis='Praca w IT to nie tylko programowanie! Za każdym udanym projektem stoi zespół ludzi, w którym niezbędna jest osoba odpowiedzialna za nadzór, koordynację i realizację celów - Project Manager. Niezależnie od roli, którą pełni w różnych firmach - czy to Product Ownera, Scrum Mastera czy Account Managera. Project Manager jest kluczowym elementem każdej udanej inicjatywy IT. Ścieżka "Project Manager w IT" zapewnia Ci możliwość rozwijania umiejętności z zakresu informatyki oraz zarządzania. Ta ścieżka to Twój bilet do roli, która jest nie tylko ekscytująca, ale także kluczowa dla sukcesu każdej firmy technologicznej.' link="https://static1.s123-cdn-static-a.com/ready_uploads/media/66882/800_5ce50d19b2fbf.jpg"/>
      <Dane2 class1="flexbox2" class2="box2"class3="flexh2"class4="flexp2"class5="button2"classzdj="zdj2" but2="but2" name="INTERNET RZECZY (IOT) [68 godzin]" link="https://static1.s123-cdn-static-a.com/ready_uploads/media/7029141/800_5f9ccc00dd131.jpg" opis='Czy kiedykolwiek marzyłeś o poznaniu najistotniejszych elementów studiów informatycznych, bez konieczności wieloletniej nauki i zapisywaniu się na studia? Ta ścieżka została stworzona specjalnie dla Ciebie! Zebraliśmy w niej wszystko, co uważamy za najważniejsze i najbardziej fascynujące w studiach informatycznych - i dodaliśmy trochę więcej. Idealna dla osób, które dopiero zaczynają swoją przygodę z IT i potrzebują solidnych fundamentów, a także dla studentów inżynieryjnych, którzy chcą wzbogacić i ugruntować swoją wiedzę'/>
      <Dane2 class1="flexbox" class2="box"class3="flexh"class4="flexp"class5="button"classzdj="zdj" but2="but" name="WEB DEVELOPER (TWÓRCA STRON INTERNETOWYCH) [161 godzin]" opis='Czy marzysz o tworzeniu niesamowitych stron internetowych i wejściu do fascynującego świata web developmentu? Oto ścieżka, którą stworzyliśmy specjalnie dla Ciebie! Zaczynamy od podstaw, aby stopniowo prowadzić Cię przez proces nauki, aż osiągniesz poziom, na którym będziesz mógł tworzyć nie tylko piękne, ale także interaktywne strony internetowe. Ale to jeszcze nie wszystko! Poza front-endem, zyskasz też solidne umiejętności programowania w JavaScript oraz podstawy back-endu, obejmujące sieci i bazy danych.' link="https://static1.s123-cdn-static-a.com/ready_uploads/media/4416/800_5cda477229c3d.jpg"/>

    </div>
  );
}

export default App;
