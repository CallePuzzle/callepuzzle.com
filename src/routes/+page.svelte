<script lang="ts">
	import backgroundName from '$lib/assets/background-name.jpg?enhanced';
</script>

<section id="background" class="flex h-[90vh] w-screen items-center justify-center">
	<enhanced:img src={backgroundName}> </enhanced:img>
</section>

<section id="quienes-somos" class="@container px-10 py-5">
	<div class="mb-5 flex w-full justify-center">
		<h2 class="text-3xl">Quiénes somos</h2>
	</div>

	<p>
		La motivación de crear esta organización fue la de compartir conocimiento y herramientas que
		surgían de una determinada necesidad, y que podían ser de utilidad para otras personas.
	</p>

	<p>
		Desde la evolución de la instalación de nuestro <a href="https://nextcloud.com">NextCloud</a>:
	</p>

	<ul>
		<li>
			<a href="https://github.com/CallePuzzle/ansible-role-docker-nextcloud"
				>ansible-role-docker-nextcloud</a
			>
		</li>
		<li>
			<a href="https://github.com/CallePuzzle/villajilguero-oci-services"
				>villajilguero-oci-services</a
			>
		</li>
	</ul>

	<p>
		La creación de un action para GitHub: <a
			href="https://github.com/CallePuzzle/envvar-to-dotenv-action">envvar-to-dotenv-action</a
		>
	</p>

	<p>
		Una aplicación web para localizar las peñas del pueblo: <a
			href="https://github.com/CallePuzzle/donde-esta-tu-local">donde-esta-tu-local</a
		>
	</p>

	<p>O los proyectos en los que estamos trabajando actualmente:</p>

	<ul>
		<li>
			una lista de compra con vitaminas: <a href="https://github.com/CallePuzzle/y-tu-que-compras"
				>y-tu-que-compras</a
			>
		</li>
		<li>
			un calendario para gestionar tus gastos: <a
				href="https://github.com/CallePuzzle/cash-calendar">cash-calendar</a
			>
		</li>
	</ul>

	<p>
		Además en nuestro blog encontrarás artículos que predenden resumir o solucionar problemas
		encontrados a lo largo de nuestra experiencia.
	</p>
</section>

<style>
	#background {
		background: linear-gradient(
			to bottom,
			var(--color-base-100) 0%,
			black 25%,
			black 75%,
			var(--color-base-100) 100%
		);
	}

	a {
		color: #16a2d3;
	}

	a:hover {
		text-decoration: underline dotted;
		text-decoration-thickness: 0.1rem;
		text-decoration-color: #16a2d3;
	}

	p {
		text-align: justify;
		padding: 0.7rem 0.2rem 0.2rem 0.2rem;
	}
	ul {
		list-style-type: disc;
	}
	li {
		margin-left: 1rem;
	}
</style>
