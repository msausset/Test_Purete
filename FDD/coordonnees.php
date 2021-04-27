<!DOCTYPE html>
<html>

	<head>
	<meta charset="utf-8"/>
	<title>FUTURE DIGITAL DESIGN</title>
	<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<img src="img/FDD.png" width="400" height="150">
		<div id="bande_horizontale">
			<span class="round">1</span>
			<p class="projet">Votre projet</p>
			<span class="circle">2</span>
			<p class="coordonnees">Vos coordonnées</p>
			<span class="rond">3</span>
			<p class="confirmation">Confirmation</p>
		</div>
		<div id="rectangle_coordonnees">
			<div class="nom_prenom">
				<p>Nom et prénom*</p>
				<input class="rectangle_nom_prenom" type="text" id="name" name="name" required>
			</div>
			<div class="adresse">
				<p>Adresse*</p>
				<input class="rectangle_adresse" type="text" id="adresse" name="adresse" required>
			</div>
			<div class="email">
				<p>Email*</p>
				<input class="rectangle_email" type="email" id="email" name="email" required>
			</div>
			<div class="telephone">
				<p>Téléphone*</p>
				<input class="rectangle_telephone" type="tel" id="telephone" name="telephone" minlength="0" maxlength="10" size="10" required>
			</div>
			<div class="nom_societe">
				<p>Nom de la société</p>
				<input class="rectangle_nom_societe" type="text" id="societe" name="societe" required>
			</div>
			<div class="numero_siret">
				<p>Numéro de siret</p>
				<input class="rectangle_numero_siret" type="text" id="siret" name="siret" required>
			</div>
			<p class="champs">*Tous les champs sont obligatoires</p>
		</div>
		<div class="button">
			<a href="votreprojet.php" class="revenir">Revenir</a>
		</div>
		<div class="button1">
			<a href="confirmation.php" class="continuer">Continuer</a>
		</div>
	</body>
</html>